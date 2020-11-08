import React from 'react'

function Project({ project }) {
  return (
    <div className="container">
      <h5 className="center">
        Highlight a specific project or accomplishment you are proud of from?
        your past experiences
      </h5>
      <p className="light">{project}</p>
      <a
        href="https://github.com/daniel-bevziuc/pure-excel"
        target="_blank"
        rel="noreferrer"
      >
        View project on GitHub
      </a>
    </div>
  )
}

export default Project
