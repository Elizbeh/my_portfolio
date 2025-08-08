import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Sections/Navbar'
import { HeroSections } from './components/Sections/HeroSections'
import SkillsSection  from './components/Sections/SkillsSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import AboutSection from './components/Sections/AboutSection'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSections />
        <SkillsSection/>
        <ProjectsSection/>
        <AboutSection/>
      </div>
    </ThemeProvider>
  )
}

export default App