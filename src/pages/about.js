import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "me.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Img fluid={data.image.childImageSharp.fluid} className="about-img"/>  
        <article className="about-text">
          <Title title="About Me" />
          <p>I graduated from USC with a B.S. in Physics and Computer Science in 2020. I love technology. I love making things look pretty. I love logic.</p>
          <div className="about-stack">
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
          </div>
          <a href="../assets/resume.pdf" className="btn" style={{marginTop: `1rem`}}>View Resume</a>
        </article>
      </div>
    </section>
  </Layout>
}

export default About;