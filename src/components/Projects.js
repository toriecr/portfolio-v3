import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const data = [
  {
    id: 1, 
    title: "Node.js project",
    desc: "This was a fun project I guess",
    stack: [
      {
        id: 1,
        stackName: "HTML"
      },
      {
        id: 2,
        stackName: "CSS"
      },
      {
        id: 3,
        stackName: "Node.js"
      }
    ], 
    github: "https://github.com/",
    url: "https://github.com/"
  }, 
  {
    id: 2, 
    title: "React project",
    desc: "This was a fun project I guess",
    stack: [
      {
        id: 1,
        stackName: "React"
      },
      {
        id: 2,
        stackName: "JavaScript"
      },
      {
        id: 3,
        stackName: "Node.js"
      }
    ],
    github: "https://github.com/",
    url: "https://github.com/"
  }
]

const Projects = () => {
  return (
    <section className="section projects">
      <Title title="featured projects" />
      <div className="section-center projects-center">
        {
          data.map((item, index) => {
            return <Project key={item.id} index={index} {...item} />
          })
        }
      </div>
    </section>
  )
}

// const Projects = (props) => {
//   return (
//     <section className="section projects">
//       <Title title={props.title} />
//       <div className="section-center projects-center">
//         {
//           props.projects.map((item, index)=> {
//             return <Project key={item.id} index={index} {...item} />
//           })
//         }
//       </div>
//       {
//         props.showLink && (
//           <Link to="/projects" className="btn center-btn">
//             projects
//           </Link>
//         )
//       }
//     </section>
//   )
// }

export default Projects;