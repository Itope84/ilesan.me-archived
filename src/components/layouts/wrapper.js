/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./reset.css"
import "./layout.css"

const Wrapper = ({ children }) => <>{children}</>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper