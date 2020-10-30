import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

export default [
  {
    id: 1, 
    icon: <FaCode className="service-icon" />,
    title: "Front-End Web Development",
    text: "Responsive, fast, front-end development.",
    delay: "500"
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Web Design",
    text: "I design websites.",
    delay: "700"
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "App Design",
    text: "I also design apps for mobile devices.",
    delay: "900"
  }
]