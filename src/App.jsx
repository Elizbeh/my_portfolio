import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Sections/Navbar'
import { HeroSections } from './components/Sections/HeroSections'
import SkillsSection  from './components/Sections/SkillsSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import AboutSection from './components/Sections/AboutSection'
import ContactSession from './components/Sections/ContactSession'
import Footer from './components/Sections/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSections />
        <SkillsSection/>
        <ProjectsSection/>
        <AboutSection/>
        <ContactSession/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App