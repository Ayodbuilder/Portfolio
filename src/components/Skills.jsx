function Skills() {
  return (
    <section className="py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        My Tech Stack
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Frontend */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded">JavaScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Tailwind</span>
            <span className="bg-gray-800 px-3 py-1 rounded">HTML</span>
            <span className="bg-gray-800 px-3 py-1 rounded">CSS</span>
          </div>
        </div>


        {/* Backend */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Backend</h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded">Node.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Express</span>
            <span className="bg-gray-800 px-3 py-1 rounded">MongoDB</span>
            <span className="bg-gray-800 px-3 py-1 rounded">REST APIs</span>
          </div>
        </div>


        {/* Tools */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Tools</h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded">Git</span>
            <span className="bg-gray-800 px-3 py-1 rounded">GitHub</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Vite</span>
            <span className="bg-gray-800 px-3 py-1 rounded">VS Code</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills
