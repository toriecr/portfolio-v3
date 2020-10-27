import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = (props) => {
  return <article className="project">
    {/* <Image /> */}
    <div className="project-info">
      <span className="project-number">{props.id}</span>
      <h3>{props.title}</h3>
      <p className="project-desc">{props.desc}</p>
      <div className="project-stack">
        {props.stack.map((item) => {
          return <span key={item.id}>{item.stackName}</span>
        })}
      </div>
      <div className="project-links">
        <a href={props.github}>
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={props.url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
}

export default Project;