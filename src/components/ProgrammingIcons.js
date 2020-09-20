import React from 'react'
import { bool } from 'prop-types'

import LaravelIcon from '../../static/icons/programming-icons/laravel.svg'

import ApiIcon from '../../static/icons/programming-icons/api.svg'
import ApiIcon2 from '../../static/icons/programming-icons/api-2.svg'
import AwsIcon from '../../static/icons/programming-icons/aws.svg'
import HtmlIcon from '../../static/icons/programming-icons/html.svg'
import JsIcon from '../../static/icons/programming-icons/javascript.svg'
import NoteIcon from '../../static/icons/programming-icons/note.svg'
import PhpIcon from '../../static/icons/programming-icons/php.svg'
import ScreenIcon from '../../static/icons/programming-icons/screen.svg'
import SpeedIcon from '../../static/icons/programming-icons/speed.svg'
import SquareIcon from '../../static/icons/programming-icons/square.svg'
import Swanicon from '../../static/icons/programming-icons/swan.svg'
import SymphonyIcon from '../../static/icons/programming-icons/symphony.svg'
import VueIcon from '../../static/icons/programming-icons/vue.svg'

import '../styles/components/programming-icons.scss'

const ProgrammingIcons = ({
  isApi,
  isApi2,
  isAws,
  isHtml,
  isJs,
  isNote,
  isPhp,
  isScreen,
  isSpeed,
  isSquare,
  isSwan,
  isSymphony,
  isVue,
  isLaravel
}) => (
  <div className="programming-icons-container">
    { isSymphony && <SymphonyIcon className="programming-icon symphony" /> }
    { isHtml && <HtmlIcon className="programming-icon html" /> }
    { isJs && <JsIcon className="programming-icon js" /> }
    { isPhp && <PhpIcon className="programming-icon php" /> }
    { isVue && <VueIcon className="programming-icon vue" /> }
    { isApi && <ApiIcon className="programming-icon api" /> }
    { isApi2 && <ApiIcon2 className="programming-icon api-two" /> }
    { isAws && <AwsIcon className="programming-icon aws" /> }
    { isNote && <NoteIcon className="programming-icon note" /> }
    { isScreen && <ScreenIcon className="programming-icon screen" /> }
    { isSpeed && <SpeedIcon className="programming-icon speed" /> }
    { isSquare && <SquareIcon className="programming-icon square" /> }
    { isSwan && <Swanicon className="programming-icon swan" /> }
    { isLaravel && <LaravelIcon className="programming-icon laravel" /> }
  </div>  
)

// ProgrammingIcons.defaultProps = {
//   isAws: true,
//   isHtml: true,
//   isJs: true,
//   isSymphony: true,
//   isLaravel: true,
//   isVue: true
// }

ProgrammingIcons.propTypes = {
  isApi: bool,
  isApi2: bool,
  isAws: bool,
  isHtml: bool,
  isJs: bool,
  isNote: bool,
  isPhp: bool,
  isScreen: bool,
  isSpeed: bool,
  isSquare: bool,
  isSwan: bool,
  isSymphony: bool,
  isVue: bool,
  isLaravel: bool,
}

export default ProgrammingIcons

