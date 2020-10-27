import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Intro = () => {
  return <header className="intro">
    <div className="section-center intro-center">
      <article className="intro-info">
        <h1>i'm torie</h1>
        <h4>freelance web developer</h4>
        <Link to="/contact" className="btn">
          contact me
        </Link>
        <SocialLinks styleClass="intro-icons"/>
      </article>
    </div>
  </header>
}

export default Intro;