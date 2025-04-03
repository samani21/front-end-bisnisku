import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #ffffff;
    height: 100vh;
    overflow: auto;
    font-family: "Urbanist", sans-serif;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.img`
    width: 100px;
`;

export const ContentContainer = styled.div`

`;
