import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background: transparent;
    z-index: 100;
    width: 100%;
    padding: 20px 100px 20px 100px;
    @media (max-width: 900px) {
      padding: 10px;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    justify-content: left;
    gap: 20px;
`;

export const Logo = styled.img`
    width: 150px;
    margin-top: -15px;
    @media (max-width: 900px) {
      margin-top: -10px;
    }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
    background: #3e57da;
    padding: 10px;
    border: none;
    border-radius: 10px;
    span{
        padding: 10px;
    }
    &:hover{
        background: #1f235b;
    }
    @media (max-width: 500px) {
      display: none;
    }
`;

export const ButtonMobile = styled.button`
    display: none;
    @media (max-width: 500px) {
      background: #3e57da;
      padding: 10px;
      border: none;
      width: 100%;
      border-radius: 10px;
      span{
          padding: 10px;
      }
      &:hover{
          background: #1f235b;
      }
      display: inline;
    }
`;

export const MenuIcon = styled.div`
  font-size: 28px;
  cursor: pointer;
  display: none;
  
  @media (max-width: 900px) {
    display: block;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  @media (max-width: 900px) {
   display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #0070f3;
  }
`;


export const NavLinksMobile = styled.ul`
  display: none;
  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "grid" : "none")};
    position: absolute;
    top: 0px;
    right: 0;
    background: white;
    width: 250px;
    height: 100vh;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    align-items: start;
  }
`;

export const IconClose = styled.div`
  font-size: 30px;
  cursor: pointer;
`;


export const MenuMobile = styled.div`
  margin: 10px;
`