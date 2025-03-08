import { Button, ButtonContainer, CardHero, Content, HeroContainer, ImageHero, ListenButton, MuteIcon, SubTitle, Title, UnMuteIcon, Video, VideoContainer } from '@/components/landingPage.js/hero'
import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
    const [mute, setMute] = useState(true);
    return (
        <HeroContainer>
            {/* <ImageHero src='./icon/iconBusinuss.svg' /> */}
            <Content>
                <Title>Kelola Bisnismu Lebih Mudah dengan <span>Bisnisku.</span></Title>
                <SubTitle>
                    Pantau pemasukan, pengeluaran, dan tampilkan produk dengan mudah.
                </SubTitle>
                <ButtonContainer>
                    <Button>
                        Daftar Sekarang
                        <span><FiArrowRight /></span>
                    </Button>
                </ButtonContainer>
                <VideoContainer>
                    <ListenButton onClick={() => setMute(!mute)}>
                        {
                            mute ?
                                <MuteIcon /> : <UnMuteIcon />
                        }
                    </ListenButton>
                    <Video key={mute} src="./video/video.webm" autoPlay loop muted={mute} playsInline />
                </VideoContainer>
            </Content>
        </HeroContainer>
    )
}

export default Hero
