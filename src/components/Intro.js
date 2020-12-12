import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "intro.jpeg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <header className="intro">
    <div className="section-center intro-center">
      <article className="intro-info">
        <h1 >Hello, I'm Torie</h1>
        <h4 >I am a software engineer based in Los Angeles, CA.</h4>
        <Link to="/#specialties" className="btn">
          Judge me
        </Link>
      </article>
      <div className="intro-img">
        <Img fluid={data.image.childImageSharp.fluid} />
        <div className="intro-img-overlay"></div>
      </div>
    </div>
  </header>
}
export default Intro;