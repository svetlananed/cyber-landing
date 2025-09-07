import logo from './assets/OSTER_logo-test.jpg';
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
    <header className="bg-black pl-6 pr-10 shadow-lg sticky top-0 z-50 ">
      <div className="flex justify-between items-center"> 

          {/* Logo */}

          <div className='flex justify-start '>
              <img src={logo} alt="Logo" className="h-25 object-contain " />
            </div>

          {/* Navigation */}

        <nav className="flex justify-end space-x-15 items-baseline">

          {/* Links */}
          
          <div className="flex space-x-8 mt-1.5">
            {links.map((link) =>

              link.dropdown ? (
                <div key={link.id} className="relative group">
                  <a
                    href={`#${link.id}`}
                    className="flex items-center space-x-2 text-cyan-300 hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] text-lg font-semibold transition duration-200 ease-in-out"
                  >
                    <span>{link.name}</span>
                    <Triangle size={14} className="mb-0.5 inline-block rotate-180 group-hover:rotate-1 transition-transform duration-200" />
                  </a>

                  {/* Dropdown */}

                  <div className="absolute left-0 mt-2 hidden w-40 border-cyan-500 border-l-2 shadow-lg group-hover:block">
                    <ul className="flex-col py-2">
                      {link.dropdown.map((item) => (
                        <li key={item.id}>
                          <a
                            href={"`#${item.id}`"}
                            className="block px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-600 hover:text-white rounded transition"
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
                  className="text-cyan-300 hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee] text-lg font-semibold transition duration-200 ease-in-out"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

            {/* Switch Language */}

            <div className="flex space-x-2 items-center text-xs text-white font-light">
              <button className="hover:text-fuchsia-400 transition">ENG</button>
                <span className="text-gray-500">|</span>
              <button className="hover:text-fuchsia-400 transition">UKR</button>
            </div>

            {/* Button */}

            <button className=" text-white text-lg px-5 py-2  font-semibold  border-r-2 border-t-2 border-fuchsia-600 rounded-full hover:bg-black transition duration-200 ease-in-out hover:drop-shadow-[0_0_3px_#c026d3,0_0_15px_#c026d3]" >
              CONTACT US
            </button>

          </nav>
        </div>
    </header>
  );
}

export default Header;