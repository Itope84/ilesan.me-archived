import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeaderSection from "../components/home/header"
import BaseLayout from "../components/layouts/wrapper"

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <HeaderSection></HeaderSection>
  </BaseLayout>
)

export default IndexPage
