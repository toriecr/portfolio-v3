import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Project from "../components/Project"

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
    title: "Shumei Arts Council",
    desc: "A full-stack events application with a headless CMS made by Strapi. Currently a work in progress to improve UI/UX, and code refactoring to better utilize GraphQL's speed and optimization.",
    stack: [
      {
        id: 1,
        stackName: "React"
      },
      {
        id: 2,
        stackName: "Node.js"
      },
      {
        id: 3,
        stackName: "GraphQL"
      }
    ], 
    github: "https://github.com/toriecr/shumei-arts-client",
    url: "https://shumei-arts.herokuapp.com/",
    imgsrc: "shumei-arts.png"
  }, 
  {
    id: 3, 
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
  }, 
  // {
  //   id: 3,
  //   title: "MERN Math Game",
  //   desc: "A full-stack game that tests your arithmetic skills, but mostly tests your reflexes. Try to beat my score.",
  //   stack: [
  //     {
  //       id: 1,
  //       stackName: "MongoDB"
  //     },
  //     {
  //       id: 2,
  //       stackName: "Express"
  //     },
  //     {
  //       id: 3,
  //       stackName: "React"
  //     },
  //     {
  //       id: 4,
  //       stackName: "Node.js"
  //     }
  //   ],
  //   github: "https://github.com/toriecr/jcpcottage-v2",
  //   url: "https://jcpcottage.com/",
  //   imgsrc: "jcp.png"
  // },
  {
    id: 4, 
    title: "YelpCamp",
    desc: "Everyone's first full-stack application made with Colt Steele's famous Udemy course. Made with the MEN stack and Passport.js for authentication.",
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
    github: "https://github.com/toriecr/yelpcamp",
    url: "https://fast-tor-47641.herokuapp.com/",
    imgsrc: "yelpcamp.png"
  },
  {
    id: 5,
    title: "Twitter Clone",
    desc: "This is the sample application for Ruby on Rails Tutorial: Learn Web Development with Rails (6th Edition) by Michael Hartl.",
    stack: [
      {
        id: 1,
        stackName: "Ruby/Rails"
      }
    ],
    github: "https://github.com/toriecr/sample_app",
    url: "https://warm-bayou-61890.herokuapp.com/",
    imgsrc: "twitter.png"
  },
  {
    id: 6, 
    title: "Portfolio v1",
    desc: "This is the official version 1 of my portfolio, made with HTML and CSS.",
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
        stackName: "JavaScript"
      }
    ],
    github: "https://github.com/toriecr/toriecr.github.io",
    url: "https://toriecr.github.io/",
    imgsrc: "portfoliov1.png"
  },
  {
    id: 7,
    title: "Lights Out",
    desc: "A React game coded along with Colt Steele's Modern React course on Udemy.com. The goal of the game is to make all of the squares dark.",
    stack: [{id: 1, stackName: "React"}],
    github: "https://github.com/toriecr/react-lights-out",
    url: "https://toriecr.github.io/react-lights-out/",
    imgsrc: "lightsout.png"
  },
  {
    id: 8,
    title: "Patatap Clone",
    desc: "A clone of the Patatap App, coded along with Colt Steele's Udemy.com course.",
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
        stackName: "JavaScript"
      }
    ],
    github: "https://github.com/toriecr/patatap-clone/tree/master/patatap",
    url: "https://toriecr.github.io/patatap-clone/patatap/circles.html",
    imgsrc: "patatap.png"
  }
]

const ProjectsPage = () => {
  return <Layout>
    <section className="projects-page">
      <Title title="All Projects" styleClass="projects-title"/>
      <div className="underline"></div>
      <p style={{textAlign: "center", padding: "0 15px 20px 15px"}}><i><u>Note from the developer:</u> To demo, please grab a coffee and allow some of these projects to load. Most of these are hosted on a hobby plan. Thank you for your patience.</i></p>
      <div className="section-center projects-center">
        {
          data.map((item, index) => {
            return <Project key={item.id} index={index} {...item} />
          })
        }
      </div>
    </section>
  </Layout>
}

export default ProjectsPage;