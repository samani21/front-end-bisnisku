import { CtaButton, HeroComponent, HeroContent, HeroImage, ImagePlaceholder } from '@/components/landingPage.js/hero'
import React from 'react'

const Hero = () => {
    return (
        <HeroComponent>
            <HeroContent>
                <h1>Kelola Bisnismu Lebih Mudah dengan <span>Bisnisku.</span></h1>
                <p>Pantau pemasukan, pengeluaran, dan tampilkan produk dengan mudah.</p>
                <CtaButton>Daftar Sekarang</CtaButton>
            </HeroContent>
            <HeroImage>
                <ImagePlaceholder></ImagePlaceholder>
            </HeroImage>
        </HeroComponent>
    )
}

export default Hero
