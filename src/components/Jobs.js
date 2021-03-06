import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"

const data = [
  {
    id: 1,
    company: "Independent Contractor",
    position: "Front-End Developer",
    date: "August 2020 - Present",
    desc: [
      {
        id: 1,
        bullet: "Developed and maintained websites and applications using React, JavaScript, Gatsby, GraphQL, Node.js, and various other technologies to meet the needs and goals of clients."
      },
      {
        id: 2,
        bullet: "Optimized deployment solution for a client and reduced their yearly hosting costs by 55%."
      },
      {
        id: 3,
        bullet: "Took initiative on front-end design decisions, and learning new back-end technologies to deliver fast, responsive, and user-friendly applications."
      }
    ]
  },
  {
    id: 2,
    company: "USC Joint Educational Program",
    position: "Volunteer Coding Instructor",
    date: "January 2019 - May 2019",
    desc: [
      {
        id: 1,
        bullet: "Planned and lead engaging coding lessons for elementary school students 2x a week during a school year."
      },
      {
        id: 2,
        bullet: "Instructed students on the fundamentals of programming using interactive team lessons of 3-4 students per group."
      },
      {
        id: 3,
        bullet: "Ensured 100% lesson satisfaction with classroom teacher and students by communicating and requesting feedback and adjusting lesson plans accordingly."
      },
    ]
  }
]

const Jobs = () => {
  const [value, setValue] = React.useState(0);

  const { company, position, date, desc } = data[value];

  return <section className="section jobs">
    <Title title="Experience" />
    <div className="underline"></div>
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
          {desc.map((item) => {
            return <div key={item.id} className="job-desc">
              <p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                &nbsp;{item.bullet}
              </p> 
            </div>
          })}
        </div>
      </article>
    </div>
  </section>
}

export default Jobs;