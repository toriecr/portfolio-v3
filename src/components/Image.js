import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Solution from https://lifesaver.codes/answer/support-dynamic-graphql-queries:

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 * 
 * Then images can be used anywhere like this:
    <Image imgsrc="yourimage.jpg" />
 */

export default class Image extends React.Component {
  render(){
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Img fluid={data.allImageSharp.edges.find((element) => {
              // Match string after final slash
              return (element.node.fluid.src.split('/').pop() === this.props.imgsrc);
            }).node.fluid} className={this.props.className} />
          )
        }}
      />
    )
  }
}