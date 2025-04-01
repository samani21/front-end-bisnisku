import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 5;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 15px;
`;

export const MenuNavbarContainer = styled.div`
    background: #fff;
    /* padding: 10px; */
    border-radius: 30px;
    /* margin-bottom: 10px; */
`;

export const MenusContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const Menus = styled.div`

`;

export const Icon = styled.svg`
    fill: ${(props) => props?.color};
`;

export const TexMenu = styled.div`
    font-family: "Boldonse", system-ui;
    background: red;
    padding: 10px 15px;
    border-radius: 30px;
    background: ${(props) => props?.color?.color_secondary};
    color: ${(props) => props?.color?.color_primary};
`;