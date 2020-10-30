import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Side from "../components/Side"
import { Parallax } from "react-parallax"

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

// const insideStyles = {
//   background: "black",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
// };

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
      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
      <div>
        <div style={parallaxStyles}>
          <h2>Cut to the chase?</h2>
        </div>
      </div>
    </Parallax>
      <Projects />
    </Layout>
  ) 
}
