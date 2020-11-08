import React, { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import Project from './components/Project'
import Description from './components/Description'
import Industry from './components/Industry'
import User from './components/User'

import './App.css'

function App() {
  const { data } = useContext(AppContext)

  if (!data) {
    return null
  }

  const { user, industry, project, description } = data.payload
  return (
    <div className="App">
      <div className="white-triangle"></div>
      <div className="main-content">
        <User user={user} />
        <Industry industry={industry} />
        <Project project={project} />
        <Description description={description} />
      </div>
    </div>
  )
}

export default App
