import logoText from './assets/LOGO-text.png';
import logoModule from './assets/LOGO-module.png';
import { Triangle } from "lucide-react"

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

function Header() {
  return (
    <header className="flex justify-between items-center bg-black sticky top-0 z-50">
      
      {/* Logo */}

      <div className='absolute top-5 left-2.5 z-50'>
        <img src={logoText} className="h-25 object-contain" />
      </div>
      <div className='absolute top-5 left-2.5 z-60'>
        <img src={logoModule} className="h-25 object-contain hover:rotate-90 transition duration-300" />
      </div>

      {/* Logo Background */}

      <div>
        <div className='absolute top-0 left-0 z-40 bg-black h-35 w-125 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-60px)_100%,0_100%)]' />
        <div className='absolute top-35 left-0 z-45 h-0.25 w-110 bg-cyan-500'/>
        <div className='absolute top-35 left-110 rotate-326 origin-bottom-left z-45 h-0.25 w-[73px] bg-cyan-500'/>
      </div>
      <div className='bg-gradient-to-r from-fuchsia-600 to-cyan-600 h-5 w-240 rotate-180 absolute top-[80px] right-0 z-35 [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-40px)_100%,0_100%)]' />
      <div className='bg-black h-5 w-full  border-cyan-500 border-b absolute top-20 right-0 z-30'/>

      {/* Navigation */}

      <nav className="h-20 flex justify-end space-x-8 items-center pr-10 ">

        {/* Links */}
        
        <div className="flex relative">
          {links.map((link) =>

            link.dropdown ? (
              <div key={link.id} className="relative group ">
                <a
                  href={`#${link.id}`}
                  className="relative px-3 py-4 block z-50 space-x-2  text-cyan-300 hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] text-l font-semibold transition duration-200 ease-in-out"
                >
                  <span>{link.name}</span>
                  <Triangle size={12} className="inline-block mb-0.5 rotate-180 group-hover:fill-current transition-transform duration-200" />
                </a>

                {/* Dropdown */}

                <div className="absolute left-0 w-60 z-40 border-cyan-500 border-l-2 bg-[linear-gradient(90deg,black_75%,transparent_100%)] invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="flex-col">
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <a
                          href={"`#${item.id}`"}
                          className="relative p-3 block text-m text-cyan-300 hover:text-white"
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
                className="relative p-4 block text-cyan-300 hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] text-l font-semibold transition duration-200 ease-in-out"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Switch Language */}

        <div className="flex space-x-2 text-xs text-white font-light">
          <button className="hover:text-fuchsia-400 transition">ENG</button>
            <span className="text-gray-500">|</span>
          <button className="hover:text-fuchsia-400 transition">UKR</button>
        </div>

        {/* Button */}

        <button className=" text-white px-5 py-2 text-l font-semibold  border-r-2 border-t-2 border-fuchsia-600 rounded-full hover:bg-black transition duration-200 ease-in-out hover:drop-shadow-[0_0_3px_#c026d3,0_0_15px_#c026d3]" >
          CONTACT US
        </button>

      </nav>
    </header>
  );
}

export default Header;