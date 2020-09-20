import React, { 
  useState, 
  useRef,
  useEffect 
} from 'react'
import { func } from 'prop-types'
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios'

import { isObjectEmpty } from '../../helpers' 


// const siteKey = "6LdzbMoZAAAAAGg1ePY5ecINQo_iVBKAEZZ08qKF"
// const siteKey = '6LeJz8oZAAAAADXKD_9w1tLbuUtsS6h2atrQPtW1'
const siteKey = '6Ler8ckZAAAAAC-USbXdlGathJgV9Ny70mBwk6sq'

const ContactForm = ({ 
  data,
  saveDataForm,
  onSubmit,
  onError
 }) => {
  const [form, setForm] = useState({
          name: '',
          email: '',
          skype: '',
          project: ''
        }),
        [errors, setErrors] = useState({}),
        [isLoading, setIsLoading] = useState(false)
  
  const recaptchaRef = useRef()

  useEffect(() => {
    data && setForm(data)
  }, [])

  const handleChange = e => {
    const {
      name,
      value
    } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
  }

  const validateForm = (form) => {
    const errors = {}
    let isValid

    for (let key in form) {
      let trimmedValue, mailIsValid

      if (key === 'skype') {
        continue
      }

      trimmedValue = form[key].trim()

      if (!trimmedValue) {
        errors[key] = 'The field is required'
        continue
      }

      if (key === 'email') {
        mailIsValid = validateEmail(form[key])

        if (!mailIsValid) {
          errors[key] = 'The email address entered is invalid'
        }
      }
    }

    isValid = isObjectEmpty(errors)
    setErrors(errors)
    
    return isValid
  }

  const transformDataForDispatch = data => {
    for (let key in data) {
      data[key] = data[key].trim()
    }

    if (!data['skype']) {
      delete data['skype']
    }

    return data
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isValid = validateForm(form)

    if (isValid) {
      const token = await recaptchaRef.current.executeAsync()
      const newData = transformDataForDispatch({ ...form })

      newData['g-recaptcha-response'] = token
      setIsLoading(true)

      axios({
        url: 'http://demo-backend.zimalab.com/api/createContactUsEmail',
        method: 'post',
        data: {...newData},
        timeout: 10000
      })
      .then(res => {
        console.log(res.status)
        setIsLoading(false)
        res.status === 200 && onSubmit(true) && onError(false)
      })
      .catch(() => {
        onSubmit(true) 
        onError(true)
        saveDataForm(form)
      })
    }
  }


  return (
    <form className="contact-form">
      <div
        {
          ...(errors.name ? {
            'className': 'contact-form__item contact-form__item-with-error'
          } : {
            'className': 'contact-form__item'
          })
        } 
      >
        <input
          value={ form.name } 
          onChange={ handleChange }
          type="text"
          name="name" 
          placeholder="Your name"
          className="contact-form__input"  
        />
        {
          errors.name && <div className="contact-form__item-error">{ errors.name }</div>
        }
      </div>
      
      <div
        {
          ...(errors.email ? {
            'className': 'contact-form__item contact-form__item-with-error'
          } : {
            'className': 'contact-form__item'
          })
        } 
      >
        <input
          value={ form.email } 
          onChange={ handleChange }
          type="text"
          name="email" 
          placeholder="Your email address"  
          className="contact-form__input"  
        />
        {
          errors.email && <div className="contact-form__item-error">{ errors.email }</div>
        }
      </div>
      
      <div className="contact-form__item">
        <input
          value={ form.skype } 
          onChange={ handleChange }
          type="text"
          name="skype" 
          placeholder="Skype (optional)"
          className="contact-form__input"    
        />
      </div>
      
      <div 
        {
          ...(errors.project ? {
            'className': 'contact-form__item contact-form__item-with-error'
          } : {
            'className': 'contact-form__item'
          })
        } 
      >
        <textarea 
          value={ form.project }
          onChange={ handleChange }
          name="project"
          placeholder="Tell us about your project"
          className="contact-form__textarea"  
        />
        {
          errors.project && <div className="contact-form__item-error">{ errors.project }</div>
        }
      </div>

      <div className="form-footer">

        <button 
          onClick={ handleSubmit }
          className="btn-submit"
          aria-label="Submit"
          disabled={ isLoading }  
        >
          { isLoading && <span className="spinner" /> }
          send
        </button>

        <ReCAPTCHA
          ref={ recaptchaRef }
          size="invisible"
          sitekey={ siteKey }
          style={{
            display: 'none'
          }}
        />

        <div className="email-info">
          or contact us directly at <a href="mailto:getstarted@zimalab.com" className="link-mailto">getstarted@zimalab.com</a>
        </div>

      </div>
    </form>
  )
}

ContactForm.propTypes = {
  onSubmit: func.isRequired,
  onError: func.isRequired,
  saveDataForm: func.isRequired
}

export default ContactForm