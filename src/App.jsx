import Header from './components/Header'
import Hero from './components/Hero'
import Curriculum from './components/Curriculum'
import Features from './components/Features'
import Enrollment from './components/Enrollment'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Enrollment />
      </main>
      <Footer />
    </div>
  )
}

export default App