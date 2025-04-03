import { Button, Content, HeroContainer, TextSection, VideoWrapper, VideSection } from '@/components/landingPage.js/hero'
import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
    const [mute, setMute] = useState(true);
    return (
        <HeroContainer>
            <Content>
                <TextSection>
                    <h1>Kelola Bisnismu Lebih Mudah dengan <span>Bisnisku.</span></h1>
                    <p>Pantau pemasukan, pengeluaran, dan tampilkan produk dengan mudah.</p>
                    <Button href="#">Daftar Sekarang</Button>
                </TextSection>
                {/* <VideSection>
                    <VideoWrapper>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/7A-hUcBe2d8?si=enJAUkAJevrjY7Im" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </VideoWrapper>
                </VideSection> */}
            </Content>
        </HeroContainer>
    )
}

export default Hero
