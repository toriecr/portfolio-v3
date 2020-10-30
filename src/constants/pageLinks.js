import React from "react"
import { Link } from "gatsby"
const data = [
    {
        id: 1,
        text: "home",
        url: "/",
        delay: "400"
    }, 
    {
        id: 2,
        text: "about",
        url: "/about/",
        delay: "600"
    },
    {
        id: 3,
        text: "projects",
        url: "/projects/",
        delay: "800"
    },
    {
        id: 4,
        text: "contact",
        url: "/contact/",
        delay: "1000"
    }
]

const pageLinks = data.map(link => {
    return (
        <li key={link.id}>
            <Link 
            to={link.url}
            data-sal="slide-down" 
            data-sal-duration="500" 
            data-sal-delay={link.delay}
            >{link.text}</Link>
        </li>
    )
});

export default ({ styleClass }) => {
    return (
        <ul className={`${styleClass ? styleClass : ""}`}>
            {pageLinks}
        </ul>
    )
}


