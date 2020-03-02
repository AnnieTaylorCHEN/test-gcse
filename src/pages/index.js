import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <Helmet>
    <script async src="https://cse.google.com/cse.js?cx=003624295726000675291:iawj2kriyxg"></script>
  </Helmet>
  <Layout>
    <SEO title="Home" />
    <h1>Here goes the Google search:</h1>
    <div className="gcse-search"></div>
  </Layout>
  </>
)

export default IndexPage
