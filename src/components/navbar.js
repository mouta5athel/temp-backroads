import React from 'react'
import logo from '../images/logo.svg'

import { sociallinks } from '../data'
import PageLinks from './PageLinks'
const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
<PageLinks parentClass='nav-links' itemClass='nav-link'/>
        

        <ul className="nav-icons">
          {sociallinks.map((links) => {
            return (
              <li key={links.id}>
                <a
                  href={links.href}
                  target="_blank"
                  rel='noreferrer'
                  className="nav-icon"
                >
                  <i className={links.icon}></i>
                </a>
              </li>
            );
          })}
         
        </ul>
      </div>
    </nav>
  )
}

export default navbar
