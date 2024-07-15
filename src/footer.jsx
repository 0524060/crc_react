// import React from "react"
import PropTypes from "prop-types"


const Footer = ({ isMediumOrLess }) => {
  return (
    <footer
      id="footer"
      style={{ position: isMediumOrLess ? "relative" : "absolute" }}
    >
      {/* Add your footer content here */}
    </footer>
  )
}

Footer.propTypes = {
  isMediumOrLess: PropTypes.bool.isRequired,
}

export default Footer
