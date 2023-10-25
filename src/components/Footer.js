import React from 'react'
import { pagelinks } from '../data'
import { sociallinks } from '../data'
import PageLinks from './PageLinks'
const Footer = () => {
  return (
    <footer className="section footer">
     
             <ul className="footer-links">
        {pagelinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul> 
      <ul className="footer-icons">
        {sociallinks.map((links) => {
          return (
            <li key={links.id}>
              <a href={links.href} target="_blank" className="footer-icon">
                <i className={links.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
