import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const data = [
  {
    id: 1, 
    title: "Node.js project",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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
    url: "https://github.com/",
    imgsrc: "image1.jpg"
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
    url: "https://github.com/",
    imgsrc: "image2.jpg"
  }
]

const Projects = () => {
  return (
    <section className="section projects">
      <Title title="Featured Projects" />
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