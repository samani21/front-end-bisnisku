import React from 'react'
import Hero from './Hero'
import Header from '../components/Header'
import Feature from './Feature'
import StepBySteps from './StepBySteps'
import Testimoni from './Testimoni'
import Pricing from './Pricing'
import Footer from './Footer'
import Head from 'next/head'

const LandingPage = () => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <Hero />
            <Feature />
            <StepBySteps />
            <Testimoni />
            <Pricing />
            <Footer />
        </div>
    )
}

export default LandingPage
