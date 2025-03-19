import { SponsorContainer, SponsorImage, SponsorItem, SponsorLogos } from '@/components/landingPage.js/sponsor'
import React from 'react'

const Sponsor = () => {
    return (
        <SponsorContainer>
            <h2>Didukung oleh Partner & Sponsor Kami</h2>
            <SponsorLogos>
                <SponsorItem>
                    <SponsorImage src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Google" />
                </SponsorItem>
                <SponsorItem>
                    <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </SponsorItem>
                <SponsorItem>
                    <SponsorImage src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="Apple" />
                </SponsorItem>
                <SponsorItem>
                    <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Grab_Logo.svg" alt="Grab" />
                </SponsorItem>
            </SponsorLogos>
        </SponsorContainer>
    )
}

export default Sponsor
