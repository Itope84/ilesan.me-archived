// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

import TopNav from "../topnav"

const HeaderSection = () => (
  <section className={headerStyles.header}>
    {/* Hello */}
    <TopNav></TopNav>
  </section>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default HeaderSection
