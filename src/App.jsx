import { Box } from "@chakra-ui/react"
import Navbar from "./components/Layout/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Layout/Footer"
function App() {

  return (
    <Box minH="100vh" overflowX="hidden" bg="gray.900">
        <Navbar />
        
        <main>
          {/* HOME -> HERO */}
          <Box id="home" scrollMarginTop="100px">
            <Hero />
          </Box>

          {/* ABOUT -> ABOUT */}
          <Box id="about" scrollMarginTop="20px">
            <About />
          </Box>
          
          {/* PROJECTS -> PROJECTS */}
          <Box id="projects" scrollBehavior="100px">
             <Projects />
          </Box>
          
          {/* CONTACT -> CONTACT */}
          <Box id="contact" scrollMarginTop="100px">
            <Contact />
          </Box>
        </main>

        <Footer />
        
      </Box>
  )
}

export default App;
