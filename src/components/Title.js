import React from "react"

const Title = ({ title, styleClass }) => {
  return <div className={`section-title ${styleClass ? styleClass : ""}`}>
    <h2>{title}</h2>
  </div>
}

export default Title;
