import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header className="header">
        <div className="header-styles text-center">
            <h1 className="m-auto text-white">
                {siteTitle}
            </h1>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Howl For Freedom',
}

export default Header
