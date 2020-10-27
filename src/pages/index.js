import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"

export default () => {
  return (
    <Layout>
      <Intro />
      <Jobs />
      <Projects />
    </Layout>
  ) 
}
