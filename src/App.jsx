import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Sections/Navbar'
import { HeroSections } from './components/Sections/HeroSections'
import SkillsSection  from './components/Sections/SkillsSection'
import ProjectsSection from './components/Sections/ProjectsSection'


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSections />
        <SkillsSection/>
        <ProjectsSection/>
      </div>
    </ThemeProvider>
  )
}

export default App