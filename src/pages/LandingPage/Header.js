import { HeaderComponent, Logo, MobilMenuToggle, Navbar, NavLinks } from '@/components/landingPage.js/header'
import React from 'react'

const Header = () => {
    return (
        <HeaderComponent>
            <Navbar>
                <Logo>Bisnisku</Logo>
                <NavLinks>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </NavLinks>
                <MobilMenuToggle>
                    ☰
                </MobilMenuToggle>
            </Navbar>
        </HeaderComponent>
    )
}

export default Header
