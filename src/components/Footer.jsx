import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-gray-800 text-center text-gray-400">

      <div className="flex justify-center gap-6 text-2xl mb-4">

        <a
          href="https://github.com/Ayodbuilder"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/victor-kehinde-94932622b"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} Victor Kehinde. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
