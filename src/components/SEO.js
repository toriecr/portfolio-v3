import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../images/me.jpg"

export default function SEO() {
 
  return (
    <Helmet
      title="Torie CR"
      meta={[
        {
          property: `og:title`,
          content: "Torie CR Portfolio",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          content: `https://www.furbaby.rocks/${ogImage}`,
        },
      ]}
    />
  )
}