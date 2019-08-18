import React from "react"

import Layout from "../components/Layout/Layout"

import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <main id="about">
        <h1 className={aboutStyles.lgHeading}>
          About <span className={aboutStyles.textAccent}>Me</span>
        </h1>

        <h2 className={aboutStyles.smHeading}>A little about me...</h2>

        <div className={aboutStyles.aboutInfo}>
          <img
            src="https:/via.placeholder.com/250"
            alt="Adam Sackfield Bio Image"
            className={aboutStyles.bioImage}
          ></img>

          <div className={aboutStyles.bio}>
            <h3 className={aboutStyles.textAccent}>BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste nihil minima repellendus nam, veniam, sunt assumenda
              perspiciatis tempora, tenetur odio ipsa ratione. A minima
              laudantium dolor neque quae ratione provident non, aspernatur,
              facilis omnis labore et. Assumenda fuga qui voluptas dolore id,
              voluptates, numquam totam dolorem consectetur modi perspiciatis?
            </p>
          </div>

          <div className={`${aboutStyles.project} ${aboutStyles.project1}`}>
            <h3>Example Title</h3>
            <h6>Main Technology</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut
              vel laudantium sequi inventore ab reiciendis consequatur repellat?
              Provident enim asperiores doloremque, dicta odio harum minima
              maxime, ut iste, cumque et vel?
            </p>
          </div>

          <div className={`${aboutStyles.project} ${aboutStyles.project2}`}>
            <h3>Example Title</h3>
            <h6>Main Technology</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut
              vel laudantium sequi inventore ab reiciendis consequatur repellat?
              Provident enim asperiores doloremque, dicta odio harum minima
              maxime, ut iste, cumque et vel?
            </p>
          </div>

          <div className={`${aboutStyles.project} ${aboutStyles.project3}`}>
            <h3>Example Title</h3>
            <h6>Main Technology</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut
              vel laudantium sequi inventore ab reiciendis consequatur repellat?
              Provident enim asperiores doloremque, dicta odio harum minima
              maxime, ut iste, cumque et vel?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
