import "./App.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Menu from "./pages/Menu/Menu"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App