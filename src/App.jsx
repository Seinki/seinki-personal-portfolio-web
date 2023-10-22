import './style.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Resume from './component/Resume'
import Skills from './component/Skills'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
