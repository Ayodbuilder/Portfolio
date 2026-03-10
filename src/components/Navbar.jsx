import { NavLink } from "react-router-dom"

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    `relative transition duration-300 ${
      isActive ? "text-blue-500" : "text-white hover:text-blue-400"
    }`

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="text-2xl font-bold text-blue-500">
          Victor.dev
        </h1>

        <div className="flex gap-8 text-lg">

          <NavLink to="/" className={linkClass}>
            {({ isActive }) => (
              <span className="relative group">
                Home
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            {({ isActive }) => (
              <span className="relative group">
                About
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            )}
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            {({ isActive }) => (
              <span className="relative group">
                Projects
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            {({ isActive }) => (
              <span className="relative group">
                Contact
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            )}
          </NavLink>

          <NavLink to="/writing" className={linkClass}>
            {({ isActive }) => (
              <span className="relative group">
                Writing
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            )}
          </NavLink>

        </div>

      </div>

    </nav>
  )
}
