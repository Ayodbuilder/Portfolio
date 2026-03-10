import { useEffect, useState } from "react"

function GithubProjects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Ayodbulder/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {repos.slice(0,6).map((repo) => (
          <div key={repo.id} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-400 mt-2">{repo.description}</p>

            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-400 mt-4 block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GithubProjects
