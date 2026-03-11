import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative transition duration-300 ${
      isActive ? "text-blue-500" : "text-white hover:text-blue-400"
    }`

  const links = [
    {name:"Home", path:"/"},
    {name:"About", path:"/about"},
    {name:"Projects", path:"/projects"},
    {name:"Contact", path:"/contact"},
    {name:"Writing", path:"/writing"}
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-500">
          Victor.dev
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg">

          {links.map((link)=>(
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {({ isActive }) => (
                <span className="relative group">
                  {link.name}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </span>
              )}
            </NavLink>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={()=>setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={26}/> : <Menu size={26}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800">

          <div className="flex flex-col items-center gap-6 py-6 text-lg">

            {links.map((link)=>(
              <NavLink
                key={link.name}
                to={link.path}
                onClick={()=>setMenuOpen(false)}
                className={linkClass}
              >
                {({ isActive }) => (
                  <span className="relative group">
                    {link.name}
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </span>
                )}
              </NavLink>
            ))}

          </div>

        </div>

      )}

    </nav>
  )
}
