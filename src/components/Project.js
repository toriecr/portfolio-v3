import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import Image from "./Image"

const Project = (props) => {
  return <article className="project">
    <Image imgsrc={props.imgsrc} className="project-img" />
    <div className="project-info">
      <span className="project-number">{props.id}.</span>
      <h3>{props.title}</h3>
      <p className="project-desc">{props.desc}</p>
      <div className="project-stack">
        {props.stack.map((item) => {
          return <span key={item.id}>{item.stackName}</span>
        })}
      </div>
      <div className="project-links">
        <a href={props.github} target="_blank">
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={props.url} target="_blank">
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
}

export default Project;