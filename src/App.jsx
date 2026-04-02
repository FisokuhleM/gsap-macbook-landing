import React from 'react'
import NavBar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App