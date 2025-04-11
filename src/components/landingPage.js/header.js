import styled from "styled-components";

export const HeaderComponent = styled.div`
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
`;


export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 5%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
`;

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;

    a{
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        transition: color 0.3s;
    }

    &:hover a{
        color: var(--primary-color);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;


export const MobilMenuToggle = styled.button`
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);

    @media (max-width: 768px) {
        display: block;
    }
`;