import React from 'react'

import '../styles/components/company-info.scss'

export default () => (
  <div className="company-info">
    <section className="company-info-block">
      <h3 className="company-info__title">Contacts</h3>
      <p>
        Skype: zimalabcom <br/>
        Email: <a href="mailto:getstarted@zimalab.com" className="link-mailto">getstarted@zimalab.com</a>
      </p>
    </section>

    <section className="company-info-block">
      <h3 className="company-info__title">Office</h3>
      <p>Address: Russia, Novosibirsk, Musy Djalilya 21, 630055</p>
      <p>Business Hours: Monday-Friday from 9am to 7pm</p>
      <p>Timezone: +7 GMT</p>
      {/* <p>Account and project managers have flexible schedule</p> */}
    </section>
  </div>
)