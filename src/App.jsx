import { useState, useEffect } from 'react'
import Header from "./Header";
import Hero from "./assets/About/About";
import About from './assets/About/About';
import bg1 from './assets/triangles_back.png';
import bg2 from './assets/1.jpg';
import lineblack from './assets/line.png';
import What from './assets/About/What';





function App() {

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  );

  return (
    <>
  
    <div 
      className="relative min-h-screen font-oxanium  text-black dark:text-white  dark:bg-black">
      {/*style={{ 
        backgroundImage: !document.documentElement.classList.contains('dark') ? `url(${bg1})` : 'none',
        backgroundSize: "100% auto",}} */}

          
      
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Content */}

      <section id="about" className="">
        <About />

      </section>

      {/*<img src={lineblack} className='w-full'/>

      <section id="about" className="">
        

      </section> */}

{/*
      <section id="services" className="h-screene flex items-center justify-center">
        <h2 className="text-4xl">Services</h2>
      </section>

      <section id="prices" className="h-screen  flex items-center justify-center">
        <h2 className="text-4xl">Prices</h2>
      </section>
      */}
   
      </div>





      
    </>
  )
}

export default App
