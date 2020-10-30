import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return <section id="specialties" className="section">
    <div data-sal="slide-left" data-sal-duration="500">
      <Title title="My Specialities" />
    </div>
    <div data-sal="fade" data-sal-duration="500" className="underline"></div>
    <div className="section-center services-center">
      {services.map(service => {
        const { id, icon, title, text, delay } = service;
        return (
          <article 
            key={id} 
            className="service"
            data-sal="flip-right"
            data-sal-duration="500"
            data-sal-delay={delay}
          >
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  </section>
}

export default Services;