import { useState } from 'react'
import Header from "./Header";
import Hero from "./assets/About/About";
import About from './assets/About/About';
import VerticalLineFixed from "./assets/Components/VerticalLineFixed";


function App() {
  return (
    <>
    <div className='font-oxanium'>
      {/*<VerticalLineFixed />*/}
      <Header />

      {/* Content */}

      <section id="about" className="h-screen bg-black text-white flex items-center justify-center">
        <About />

      </section>

      <section id="services" className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-4xl">Services</h2>
      </section>

      <section id="prices" className="h-screen bg-gray-700 text-white flex items-center justify-center">
        <h2 className="text-4xl">Prices</h2>
      </section>
   
      </div>
    </>
  )
}

export default App
