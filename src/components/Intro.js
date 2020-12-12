import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Intro = () => {
  return <header className="intro">
    <div className="section-center intro-center">
      <article className="intro-info">
        <h1 >Hello, I'm Torie</h1>
        <h4 >I am a software engineer based in Los Angeles, CA.</h4>
        <Link to="/#specialties" className="btn">
          Judge me
        </Link>
      </article>
    </div>
  </header>
}

export default Intro;