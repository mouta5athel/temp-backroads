import React from 'react'
import Title from './Title'
import { services } from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services' />
      <div className="section-center services-center">
        {services.map((links) =>{
          return (
            <article className="service" key={links.id}>
              <span className="service-icon">
                <i className={links.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{links.title}</h4>
                <p className="service-text">
                  {links.text}
                </p>
              </div>
            </article>
          )
        })}
        

        
      </div>
    </section>
  )
}

export default Services
