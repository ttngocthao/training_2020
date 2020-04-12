import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import GridLayout from "../components/Grid-Homepage/GridLayout"
export default () => {
  // console.log("data", data) //for the query
  return (
    <Layout>
      <SEO />
      <h1 className="heading1">This is home page</h1>
      <GridLayout />
    </Layout>
  )
}
