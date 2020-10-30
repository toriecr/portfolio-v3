import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Intro = () => {
  return <header className="intro">
    <div className="section-center intro-center">
      <article className="intro-info">
        <h1 
          data-sal="slide-up" 
          data-sal-duration="200">Hello, I'm Torie</h1>
        <h4 
          data-sal="slide-up" 
          data-sal-duration="200" 
          data-sal-delay="200">I am a software engineer based in Los Angeles, CA.</h4>
        <Link 
        data-sal="slide-up" 
        data-sal-duration="200" 
        data-sal-delay="400"
        to="/#specialties" className="btn">
          Judge me
        </Link>
      </article>
    </div>
  </header>
}

export default Intro;