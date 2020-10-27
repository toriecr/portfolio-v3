import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    company: "Self-Employed",
    position: "Freelance Front-End Developer",
    date: "May 2020 - Present",
    desc: "I did a bunch of stuff"
  },
  {
    id: 2,
    company: "USC Joint Educational Program",
    position: "Volunteer Coding Instructor",
    date: "January 2019 - May 2019",
    desc: "I did a bunch of stuff"
  }
]

const Jobs = () => {
  const [value, setValue] = React.useState(0);

  const { company, position, date, desc } = data[value];

  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {data.map((item, index) => {
          return (
            <button
            key={item.id}
            onClick={()=> setValue(index)}
            className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.company}
            </button>
          )
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
          <p>{desc}</p>
        </div>
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Jobs;