import { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import Header from "./header"
import Middle from "./middle"
import Gallery from "./gallery"

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
      <Header parallax={!isMediumOrLess} isMediumOrLess={isMediumOrLess} />
      <Switch>
        <Route exact path="/middle" component={Middle} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  )
}

export default App
