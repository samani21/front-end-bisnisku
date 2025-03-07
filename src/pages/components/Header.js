import { Button, ButtonMobile, HeaderContainer, HeaderLeft, HeaderRight, IconClose, Logo, MenuIcon, MenuMobile, NavItem, NavLinks, NavLinksMobile } from '@/components/Header'
import React, { useEffect, useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
const Header = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <HeaderContainer style={{ backgroundColor: isScrolled ? 'white' : 'transparent', transition: 'background-color 0.3s ease' }}>
            <HeaderLeft>
                <Logo src='./icon/logo.png' />
                <NavLinks>
                    <NavItem>Home</NavItem>
                    <NavItem>Features</NavItem>
                    <NavItem>Pricing</NavItem>
                    <NavItem>Contact</NavItem>
                </NavLinks>
            </HeaderLeft>
            <HeaderRight>
                <Button>
                    Get Started
                    <span><FiArrowRight /></span>
                </Button>
                <MenuIcon onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </MenuIcon>
                <NavLinksMobile open={open}>
                    <div style={{}}>
                        <IconClose>
                            <FiX onClick={() => setOpen(!open)} />
                        </IconClose>
                        <MenuMobile>
                            Home
                        </MenuMobile>
                        <MenuMobile>
                            Features
                        </MenuMobile>
                        <MenuMobile>
                            Pricing
                        </MenuMobile>
                        <MenuMobile>
                            Contact
                        </MenuMobile>
                        <ButtonMobile>
                            Get Started
                            <span><FiArrowRight /></span>
                        </ButtonMobile>
                    </div>
                </NavLinksMobile>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
