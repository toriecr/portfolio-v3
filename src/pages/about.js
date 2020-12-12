import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Image from "../components/Image"

const About = () => {
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image imgsrc="me.jpg" className="about-img" />
        <article className="about-text">
          <Title title="About Me" />
          <p>I graduated from USC with a B.S. in Physics and Computer Science in 2020. I love technology. I love making things look pretty. I love logic.</p>
          <div className="about-stack">
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
          </div>
          <a href="../assets/resume.pdf" className="btn">View Resume</a>
        </article>
      </div>
    </section>
  </Layout>
}

export default About;