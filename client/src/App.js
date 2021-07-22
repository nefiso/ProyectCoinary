import { BrowserRouter as Router ,Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"

export default function App() {
  return (
  <Router>
    <Route path= "/" component={Navbar} />
    <Route exact path= "/" component={Home}  />
    <Route path= "/" component={Footer} />
  </Router>
         )
  
}
