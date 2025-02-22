import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import Header from "./Header"
import Middle from "./Middle"
import Footer from "./Footer"
import "./assets/css/main.css"

const App = () => {
  const isMediumOrLess = useMediaQuery({ query: "(max-width: 980px)" })

  useEffect(() => {
    document.body.classList.remove("is-preload")
    if (isMediumOrLess) {
      // Touch handling
      document.body.classList.add("is-touch")
      setTimeout(() => {
        window.scrollTo(0, 1)
      }, 0)
    }
  }, [isMediumOrLess])

  return (
    <Router>
      <Header parallax={!isMediumOrLess}/>
      <Routes>
        <Route path="/" element={<Middle />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
