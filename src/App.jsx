import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsListings from './components/JobsListings'
import ViewAll from './components/ViewAll'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAll />
    </>
  )
}

export default App