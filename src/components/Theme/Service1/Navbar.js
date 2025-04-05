import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    bottom: 0;
    background: #F8F8F8 ;
    height: 50px;
    width: 100%;
    z-index: 5;
    border-radius: 20px;
`;

export const Menus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
export const Menu = styled.div`
    cursor: pointer;
    position: relative;
    
    &.active::after {
        content: "";
    position: absolute;
    left: 51px;
    top: 29px;
    transform: translateX(-50%);
    bottom: -6px;
    background-image: url(/icon/active.png);
    height: 100px;
    width: 100px;
    background-repeat: no-repeat;
        }
`;

export const Icon = styled.svg`
    fill: ${(props) => (props.active ? "#0077B5" : props?.color)};
    transition: transform 0.2s ease-in-out, fill 0.2s;

    &:hover {
        transform: scale(1.1);
        fill: #0077B5;
    }

`;
