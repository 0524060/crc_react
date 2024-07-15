import { useEffect } from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"


const Header = ({ parallax, isMediumOrLess }) => {
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
      {/* Add your header content here */}
      <Footer isMediumOrLess={isMediumOrLess} />
    </header>
  )
}

Header.propTypes = {
  parallax: PropTypes.bool.isRequired,
  isMediumOrLess: PropTypes.bool.isRequired,
}

export default Header
