import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Intro = () => {
  return <header className="intro">
    <div className="section-center intro-center">
      <article className="intro-info">
        <h1 
          data-sal="slide-up" 
          data-sal-duration="500">Hello, I'm Torie</h1>
        <h4 
          data-sal="slide-up" 
          data-sal-duration="500" 
          data-sal-delay="600">I am a software engineer, specializing in full-stack web development.</h4>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
        <SocialLinks styleClass="intro-icons"/>
      </article>
    </div>
  </header>
}

export default Intro;