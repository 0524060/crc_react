import{ useEffect } from "react"
import PropTypes from "prop-types"
// import Footer from "./Footer"
import avatar from "./images/avatar.jpg" // 确保你的图片路径正确

const Header = ({ parallax}) => {
  useEffect(() => {
    if (!parallax) return

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      document.getElementById("header").style.backgroundPosition = `left ${
        -scrollTop / 20
      }px`
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [parallax])

  return (
    <header id="header" className="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={avatar} alt="Avatar" />
        </a>
        <h1>
          <strong>I am AndyKuo</strong>
          <div>a cloud engineer</div>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  parallax: PropTypes.bool.isRequired,
  isMediumOrLess: PropTypes.bool.isRequired,
}

export default Header
