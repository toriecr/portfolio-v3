import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const data = [
  {
    id: 1, 
    title: "Tesla Landing Page",
    desc: "A clone of the Tesla landing page.",
    stack: [
      {
        id: 1,
        stackName: "React"
      },
      {
        id: 2,
        stackName: "Node.js"
      }
    ], 
    github: "https://github.com/toriecr/tesla-clone",
    url: "https://toriecr.github.io/tesla-clone/",
    imgsrc: "tesla.png"
  }, 
  {
    id: 2, 
    title: "JCP Cottage",
    desc: "A fast, responsive site for a residential care facility. Made with React and enhanced by Gatsby.",
    stack: [
      {
        id: 1,
        stackName: "React"
      },
      {
        id: 2,
        stackName: "Gatsby"
      }
    ],
    github: "https://github.com/toriecr/jcpcottage-v2",
    url: "https://jcpcottage.com/",
    imgsrc: "jcp.png"
  }
]

const Projects = () => {
  return (
    <section className="section projects">
      <Title title="Projects I've Worked On" />
      <div className="underline"></div>
      <div className="section-center projects-center">
        {
          data.map((item, index) => {
            return <Project key={item.id} index={index} {...item} />
          })
        }
      </div>
      <Link to="/projects" className="btn center-btn">
        View All Projects
      </Link>
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