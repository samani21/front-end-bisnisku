import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    width: 100%;
    z-index: 3;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    /* padding: 20px; */
    box-shadow: 0px 1px 2px 1px rgba(7, 7, 7, 0.219);
    border-radius: 30px;
    width: 96%;

`;

export const HeaderLeft = styled.div`
    padding: 10px;
    cursor: pointer;
`;
export const HeaderRight = styled.div`
    padding: 10px;
    display: flex;
    justify-content: right;
    align-items: center;
    background: ${(props) => props?.color};
    border-radius: 30px;
    gap: 10px;
`;

export const Logo = styled.img`
    width: 30px;
`;

export const IconSvg = styled.svg`
    fill: ${(props) => props?.color || "black"};
`;

export const NoMeja = styled.h3`
    color: ${(props) => props?.color || "black"};
    font-family: "Big Shoulders", sans-serif;
    font-size: 25px;
    /* font-size: 40px; */
`;