import './App.css'
import About from './components/About/About'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Team from './components/Team/Team'

function App() {

  return (
    <div className="App">
     <Navbar />
     <Landing />
     <About />
     <Stats />
     {/* <Team /> */}
     <Carousel />
     <Footer />
    </div>
  )
}

export default App
