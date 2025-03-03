import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListings from '../components/JobsListings'
import ViewAll from '../components/ViewAll'

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobsListings count={3} />
            <ViewAll />
        </>
    )
}

export default HomePage