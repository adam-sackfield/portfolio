import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/Layout/Layout"
import "./background.scss"
import indexStyles from "./index.module.scss"

import "../../node_modules/font-awesome/css/font-awesome.min.css"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet bodyAttributes={{ id: "bg-image" }}></Helmet>

      <main id="home">
        <h1 className={indexStyles.lgHeading}>
          Adam <span className={indexStyles.textAccent}>Sackfield</span>
        </h1>

        <h2 className={indexStyles.smHeading}>Web Developer / Programmer</h2>

        <div className={indexStyles.icons}>
          <a href="#!">
            <i className="fa fa-github fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
