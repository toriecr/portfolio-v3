import React from "react"
import { FaLinkedin, FaGithub, FaTwitter, FaCodepen } from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaLinkedin className="social-icon"> </FaLinkedin>,
        url: "https://www.linkedin.com/in/toriecr/"
    },
    {
        id: 2,
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/toriecr"
    },
    {
        id: 3,
        icon: <FaTwitter className="social-icon"></FaTwitter>,
        url: "https://twitter.com"
    },
    {
        id: 4,
        icon: <FaCodepen className="social-icon"></FaCodepen>,
        url: "https://codepen.io/"
    }
]

const socialLinks = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>
            {socialLinks}
        </ul>
    )
}