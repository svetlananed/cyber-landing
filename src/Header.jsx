import logoText from './assets/LOGO-text.png';
import logoModule from './assets/LOGO-module.png';
import logoMobile from './assets/LOGO-mobile.png'
import logoTextBlack from './assets/LOGO-text-black.png';
import logoModuleBlack from './assets/LOGO-module-black.png';
import logoMobileBlack from './assets/LOGO-mobile-black.png'
import toggleDay from './assets/toggle-day2.png'
import toggleNight from './assets/toggle-night.png'
import toggleNightBlack from './assets/toggle-night-black.png'
import { Triangle, Menu, X } from "lucide-react"
import { useState } from 'react';



const links = [
  { name: "ABOUT US", id: "about" },
  { name: "SERVICES", id: "services", 
    dropdown: [
      { id: "webdev", name: "Web Development" },
      { id: "design", name: "Design" },
      { id: "marketing", name: "Marketing" },
    ]
  },
  { name: "PRICES", id: "prices" },
  { name: "PROJECTS", id: "projects" },
  { name: "BLOG", id: "blog" },
  { name: "TOOLS", id: "tools", 
    dropdown: [
      { id: "calculator", name: "Calculator" },
      { id: "parser", name: "Parser" },
    ]
  },
];

function Header({ theme, toggleTheme }) {
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  return (
    <>
    <header className=" px-7 lg:px-10 h-16 lg:h-20 flex justify-between items-center bg-white dark:bg-black sticky top-0 z-50 border-b border:black dark:border-cyan-500 2xl:border-b-0">

      {/*--------------Desktop Menu-----------------*/}
      
      {/* Logo */}
      
      {/*Logo Desktop*/}

      <div className='hidden lg:block'>
        <div className='absolute top-2.5 xl:top-5 left-2.5 z-60'>
          <img src={theme === "dark" ? logoText : logoTextBlack} className=" block h-10 lg:hidden xl:block xl:h-16 2xl:h-25 object-contain " />
        </div>
        <div className='absolute top-2.5 lg:top-2.5 xl:top-5 left-2.5 z-60'>
          <img src={theme === "dark" ? logoModule : logoModuleBlack} className=" h-10 lg:h-16 2xl:h-25 object-contain hover:rotate-90 transition duration-300"/>
        </div>
      </div>

      {/*Logo Mobile*/}

      <div className='lg:hidden absolute top-1.5 left-2.5 z-60'>
        <img src={theme === "dark" ? logoMobile : logoMobileBlack} className=" block h-13 lg:hidden xl:block xl:h-20 2xl:h-25 object-contain " />
      </div>

      {/* Header Background */}

        {/* Logo Background */}

      <div className="hidden 2xl:block">
        <div className='absolute top-0 left-0 z-40 bg-white dark:bg-black h-35 w-125 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-60px)_100%,0_100%)]' />
        <div className='absolute top-35 left-0 z-45   h-0.25 w-110 bg-black dark:bg-cyan-500'/>
        <div className='absolute top-35 left-110 rotate-326 origin-bottom-left z-45 h-0.25 w-[73px] bg-black dark:bg-cyan-500'/>
        
      </div>

      <div className="hidden xl:block 2xl:hidden">
        <div className='absolute top-17 left-0 z-40 bg-white dark:bg-black h-10 w-87 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-60px)_100%,0_100%)]' />
        <div className='absolute top-27 left-0 z-45 h-0.25 w-72 bg-black dark:bg-cyan-500'/>
        <div className='absolute top-27 left-72 rotate-326 origin-bottom-left z-45 h-0.25 w-[52px] bg-black dark:bg-cyan-500'/>
      </div>

        {/* Gradient Bottom Line */}

      <div className='hidden 2xl:block bg-black dark:bg-gradient-to-r from-fuchsia-600 to-cyan-600 h-5 w-252 rotate-180 absolute top-[80px] right-0 z-35 [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-40px)_100%,0_100%)]' />
      <div className='hidden 2xl:block bg-white dark:bg-black h-5 w-full border-black dark:border-cyan-500 border-b absolute top-20 right-0 z-30'/>

        {/* Gradient Menu Line */}

      <div className='block dark:hidden absolute left-0 top-0 w-full h-10 z-50 bg-gradient-to-b from-gray-300 to-transparent'/>

      {/*<div className='block dark:hidden absolute right-0 bg-cyan-300 top-0 w-272 h-25 z-32 [clip-path:polygon(0_0,100%_0,100%_calc(100%-100px),calc(100%-160px)_100%,0_100%)] bg-gradient-to-r from-fuchsia-600 to-cyan-600 rotate-180' />*/}
      
      {/* Navigation */}

      <nav className="hidden lg:flex h-20 justify-end space-x-5 xl:space-x-7 items-center z-70">

        {/* Links */}
        
        <div className="flex relative">
          {links.map((link) =>

            link.dropdown ? (
              <div key={link.id} className="relative group ">
                <a
                  href={`#${link.id}`}
                  className="relative px-3 py-4 text-base block z-50 space-x-2  dark:text-cyan-300 dark:hover:text-white dark:hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] hover:text-slate-400 font-semibold transition duration-200 ease-in-out"
                >
                  <span>{link.name}</span>
                  <Triangle size={12} className="inline-block mb-0.5 rotate-180 group-hover:fill-current transition-transform duration-200" />
                </a>

                {/* Dropdown */}

                <div className="absolute left-0 w-60 z-40 border-black dark:border-cyan-500 border-l-4 dark:border-l-2 
                                invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {/*Dropdowm Background*/}
                {/*Light*/}<div className="absolute inset-0 bg-white  dark:hidden z-0"></div>
                {/*Dark*/}<div className="absolute inset-0 bg-[linear-gradient(90deg,black_75%,transparent_100%)] hidden dark:block z-0"></div>

                  <ul className="flex-col">
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="relative z-10 p-3 block text-m text-black dark:text-cyan-300 hover:text-slate-400  dark:hover:text-white border-b border-black/10"
                        >
                          {item.name}
                         
                        </a>
                        
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative p-4 block text-base dark:text-cyan-300 hover:text-slate-400 dark:hover:text-white dark:hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] font-semibold  transition duration-200 ease-in-out"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Switch Language */}

        <div className="flex space-x-2 text-xs  dark:text-white font-semibold dark:font-light">
          <button className="hover:text-slate-400 dark:hover:text-fuchsia-400 transition cursor-pointer">ENG</button>
            <span className="text-gray-500">|</span>
          <button className="hover:text-slate-400 dark:hover:text-fuchsia-400 transition cursor-pointer">UKR</button>
        </div>

        {/*Switch Theme*/}

       <div className='transition ease-in-out cursor-pointer z-60' 
          onClick={toggleTheme}>
            {theme === "light" ? 
            <img src={toggleNightBlack} className="h-6 transition-all duration-400 ease-in-out"/> : 
            <img src={toggleDay} className="h-6 transition-all duration-400 ease-in-out"/>}
        </div>

        {/* Button */}

        <button className="z-60 relative overflow-hidden group dark:text-white px-5 py-2 font-semibold  
                  border-r-2 border-t-2 border-black dark:border-fuchsia-600 
                  rounded-full hover:bg-gray-300 dark:hover:bg-black 
                  transition duration-200 ease-in-out 
                  dark:hover:drop-shadow-[0_0_3px_#c026d3,0_0_15px_#c026d3]"
      >
        <span className="relative z-10">CONTACT US</span>

        {/* Glow */}
        <span className="absolute top-0 left-[-100%] w-[60%] h-full
                    bg-gradient-to-tr from-transparent via-white/90 to-transparent
                    transform skew-x-[-20deg]
                    transition-all duration-700 ease-in-out
                    group-hover:left-[120%] dark:hidden"
        ></span>
      </button>

      </nav>

      {/*--------------Mobile Controls--------------*/}

      <div className="flex items-center space-x-3 ml-auto lg:hidden">

        {/*Switch Theme on Mobile*/}

        <div className='transition ease-in-out cursor-pointer z-60' 
          onClick={toggleTheme}>
            {theme === "light" ? 
            <img src={toggleNightBlack} className="h-6 transition-all duration-400 ease-in-out"/> : 
            <img src={toggleDay} className="h-6 transition-all duration-400 ease-in-out"/>}
        </div>
        
        {/*Burger Button*/}

        <button className="relative p-3 ml-auto text-black dark:text-cyan-300 hover:text-slate-400 dark:hover:text-white dark:hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] transition duration-200 ease-in-out z-60" 
          onClick={() => {
            const newState = !isMenuOpen;
            setMenuOpen(newState);
            if (!newState) setAccordionOpen(null)} }
            > 
            <Menu 
              size={36}
              className={`absolute inset-0 m-auto transition-all duration-300
                ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
            />
            <X
              size={36}
              className={`absolute inset-0 m-auto transition-all duration-300
                ${isMenuOpen ? "opacity-100 rotate-180" : "opacity-0 rotate-90"}`}/>


        </button>

      </div>
      
    </header>

    {/* ------------Mobile menu---------------- */}

      <div> 

        <nav className={`lg:hidden fixed top-[61px] w-full bg-white dark:bg-black/95 z-50 pb-8 overflow-hidden transition-all duration-300 ease-in-out 
        ${isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>

          {/* Links */}
          
          <div className={`flex flex-col items-center text-black dark:text-cyan-300 py-4 px-8 text-lg font-normal transition duration-200 ease-in-out`}>
              
            {links.map((link) =>

              link.dropdown ? (
                <div key={link.id} className="w-full flex flex-col items-center transition duration-200 ease-in-out">
                  <a
                    href={`#${link.id}`}
                    className="relative z-50 block py-3 text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setAccordionOpen(accordionOpen === link.id ? null : link.id);
                    }}
                  >
                    <span className={`${
                      accordionOpen === link.id ? "text-black dark:text-white dark:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee]" : ""
                    }`}>
                      {link.name}
                    </span>
                    <Triangle size={8} className={`absolute -right-4 top-1/2 -translate-y-1/2 rotate-180 transition-transform duration-200  ${
                      accordionOpen === link.id ? "fill-current" : "fill-none"
                    }`} />
                  </a>

                  {/* Dropdown */}

                  <div className={`w-full  overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    accordionOpen === link.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <ul className="flex flex-col w-full ">
                      <div className='hidden dark:flex h-0.25 mx-auto w-[80%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent'/>
                      <div className='flex dark:hidden h-0.25 mx-auto w-[80%] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent'/>
                      {link.dropdown.map((item) => (
                        
                        <li key={item.id} className="w-full ">
                          <a
                            href={`#${item.id}`}
                            className="block w-full py-2 text-m text-center text-slate-400 dark:text-cyan-600"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                      
                          </a>
                          <div className='hidden dark:flex h-0.25 mx-auto w-[80%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent'/>
                          <div className='flex dark:hidden h-0.25 mx-auto w-[80%] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent'/>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="relative block py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

         

          {/* Button */}

        <button className="z-60 mx-auto flex items-center justify-center font-normal relative overflow-hidden group dark:text-white py-2 px-5 pt-3 pb-2 text-lg border-r-2 border-t-2 border-black dark:border-fuchsia-600 
                  rounded-full hover:bg-gray-300 dark:hover:bg-black 
                  transition duration-200 ease-in-out 
                  dark:hover:drop-shadow-[0_0_3px_#c026d3,0_0_15px_#c026d3]"
      >
        <span className="relative z-10">CONTACT US</span>

        {/* Glow */}
        <span className="absolute top-0 left-[-100%] w-[60%] h-full
                    bg-gradient-to-tr from-transparent via-white/90 to-transparent
                    transform skew-x-[-20deg]
                    transition-all duration-700 ease-in-out
                    group-hover:left-[120%] dark:hidden"
        ></span>
      </button>

        </nav>

      </div>

      </>

          

  );
}

export default Header;