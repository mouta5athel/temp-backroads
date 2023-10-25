import React from 'react'
import Title from './Title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((links)=>{
          return (
            <article className="tour-card" key={links.id}>
              <div className="tour-img-container">
                <img src={links.image} className="tour-img" alt="" />
                <p className="tour-date">{links.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{links.title}</h4>
                </div>
                <p>{links.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {links.location}
                  </p>
                  <p>{links.duration} days</p>
                  <p>{links.cost} $</p>
                </div>
              </div>
            </article>
          )
        })}
        

       
      </div>
    </section>
  )
}

export default Tours
