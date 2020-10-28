import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Side from "../components/Side"

export default () => {
  return (
    <Layout>
      <Side />
      <Intro />
      <Jobs />
      <Projects />
    </Layout>
  ) 
}
