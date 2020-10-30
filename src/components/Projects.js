import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const data = [
  {
    id: 1, 
    title: "YelpCamp",
    desc: "A full-stack RESTful app made alongside Colt Steele's Udemy course.",
    stack: [
      {
        id: 1,
        stackName: "MongoDB"
      },
      {
        id: 2,
        stackName: "Express"
      },
      {
        id: 3,
        stackName: "Node.js"
      }
    ], 
    github: "https://github.com/toriecr/YelpCamp",
    url: "https://fast-tor-47641.herokuapp.com/",
    imgsrc: "yelpcamp.png"
  }, 
  {
    id: 2, 
    title: "Twitter Clone",
    desc: "A Twitter-like RESTful API made with Ruby on Rails.",
    stack: [
      {
        id: 1,
        stackName: "Ruby on Rails"
      }
    ],
    github: "https://github.com/toriecr/sample_app",
    url: "https://warm-bayou-61890.herokuapp.com/",
    imgsrc: "twitter.png"
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