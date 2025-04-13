import React from 'react'
import styled from 'styled-components';
const FooterComponent = styled.div`
    text-align: center;
    padding: 2rem;
    background-color: var(--dark-color);
    color: white;
`;
const Footer = () => {
    return (
        <FooterComponent>
            <p>©2025 Syntax Project. All rights reserved.</p>
        </FooterComponent>
    )
}

export default Footer
