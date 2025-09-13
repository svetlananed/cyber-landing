import { useState, useEffect } from 'react'
import Header from "./Header";
import Hero from "./assets/About/About";
import About from './assets/About/About';




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
  
    <div className='font-oxanium text-black dark:text-white  dark:bg-black'>
      
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Content */}

      <section id="about" className="h-screen flex items-center justify-center">
        <About />

      </section>

      <section id="services" className="h-screene flex items-center justify-center">
        <h2 className="text-4xl">Services</h2>
      </section>

      <section id="prices" className="h-screen  flex items-center justify-center">
        <h2 className="text-4xl">Prices</h2>
      </section>
   
      </div>
    </>
  )
}

export default App
