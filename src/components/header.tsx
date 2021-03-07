import * as React from "react"
import * as styles from "../scss/components/header.module.scss"
// import { Link } from "gatsby"
import Logo from "../assets/ilesan-me.svg"

const Header: React.FC<PropTypes> = ({ siteTitle = "" }) => (
  <header className={styles.header}>
    <Logo className={styles.logo} />
    {/* logo */}
    <nav className="header-nav">ilesan.me</nav>
  </header>
)

interface PropTypes {
  siteTitle?: string
}

export default Header
