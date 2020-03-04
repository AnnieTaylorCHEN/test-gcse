import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from '../components/search'
import ClientOnly from '../hooks/clientOnly'

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <h1>Here goes the Google search:</h1>
    <ClientOnly>
      <Search />
    </ClientOnly>
  </Layout>
  </>
)

export default IndexPage
