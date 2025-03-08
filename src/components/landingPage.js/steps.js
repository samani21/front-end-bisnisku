import styled from "styled-components";

export const StepsContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #e5e5e5;
`;

export const Title = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    @media (max-width: 500px) {
        font-size: 24px;
    }
`;
export const SubTitle = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    padding: 10px;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
    justify-content: center;
    align-items: start;
    gap: 10px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1,1fr);
        gap: 20px;
    }
`;


export const Steps = styled.div`
    display: grid;
    justify-content: center;
    align-items: start;
    padding: 10px;
`;
export const StepsArrow = styled.div`
    display: grid;
    justify-content: center;
    align-items: start;
    @media (max-width: 900px) {
        display: none;
    }
`;
export const StepsArrowResponsive = styled.div`
    display: none;
    @media (max-width: 900px) {
        display: grid;
        justify-content: center;
        align-items: start;
    }
    @media (max-width: 500px) {
        display: none;
    }
`;
export const StepsArrowResponsiveMobile = styled.div`
    display: none;
    @media (max-width: 500px) {
        display: grid;
        justify-content: center;
        align-items: start;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    width: 100px;
    background: #4762c9;
    border-radius: 100px;
`;
export const IconSteps = styled.img`
    width: 100px;
    background: #4762c9;
    border-radius: 100px;

`;
export const IconResponsive = styled.img`
    width: 100px;
    background: #4762c9;
    border-radius: 100px;
    @media (min-width: 900px) {
        display: none;
    }
    @media (max-width: 500px) {
        display: none;
    }
`;


export const TitleSteps = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const SubTitleSteps = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`;