import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 70px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
    border-bottom: 1px solid #292929;
    @media (max-width: 1250px) {
        display: grid;
    }
    @media (max-width: 500px) {
        padding: 10px;
    }
`;

export const Left = styled.div`
    display: grid;
    justify-content: left;
    align-items: center;
    gap: 10px;
    @media (max-width: 1250px) {
        display: flex;
    }
    @media (max-width: 500px) {
        display: grid;
    }
`;
export const Right = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1,1fr);
    }
`;

export const Logo = styled.img`
    width: 150px;
`

export const SubTitle = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 12px;
    font-weight: 400;
    width: 200px;
    text-align: left;
    @media (max-width: 1250px) {
        width: 100%;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Navigasi = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 18px;
    font-weight: 600;
    height: 200px;
    gap: 10px;
    display: grid;
    text-align: left;
    
    @media (max-width: 500px) {
        font-size: 24px;
    }
`;

export const Icon = styled.img`

`;

export const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 14px;
    font-weight: 400;
`;