import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/Layout/Layout"
import "./background.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet bodyAttributes={{ id: "bg-image" }}></Helmet>

      <div id="main">Main</div>
    </Layout>
  )
}

export default IndexPage
