import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Side from "../components/Side"
import { Parallax } from "react-parallax"
import { Link } from "gatsby"

const image1 =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "grid",
  placeItems: "center"
};

const btnStyle = {
  marginTop: "1rem"
};

const parallaxStyles = {
  height: 500,
  padding: "5rem 0"
};
export default () => {
  return (
    <Layout>
      <Side />
      <Intro />
      <Services />
      <Jobs />
      <Parallax bgImage={image1} blur={{ min: 1, max: 4 }}>
      <div>
        <div style={parallaxStyles}>
          <div style={insideStyles}>
            <h2>Cut to the chase?</h2>
            <Link to="/" className="btn" style={btnStyle}>View resume already</Link>
          </div>
        </div>
      </div>
    </Parallax>
      <Projects />
    </Layout>
  ) 
}
