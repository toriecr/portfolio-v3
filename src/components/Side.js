import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Side = () => {
  return <div className="side">
    <ul className="intro-icons">
      <li>
        <a className="social-link side-link" href="https://www.linkedin.com/in/toriecr/"><FaLinkedin className="social-icon"></FaLinkedin></a>
      </li>
      <li>
        <a className="social-link side-link" href="https://github.com/toriecr"><FaGithub className="social-icon"></FaGithub></a>
      </li>
    </ul>
  </div>
}

export default Side;