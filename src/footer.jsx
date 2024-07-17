// import React from "react"
import PropTypes from "prop-types"

const Footer = () => {
  return (
    <footer
      id="footer"
    >
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://linkedin.com/in/lihungkuo"
              className="icon brands fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          {/* <li>
            <a
              href="https://github.com/0524060"
              className="icon brands fa-github"
            >
              <span className="label">Github</span>
            </a>
          </li> */}
          <li>
            <a
              href="https://andykuo-website.com"
              className="icon brands fa-dribbble"
            >
              <span className="label">Blog</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:andykuo417@gmail.com"
              className="icon solid fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        {/* <div className="counter-number">views</div> */}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  isMediumOrLess: PropTypes.bool.isRequired,
}

export default Footer
