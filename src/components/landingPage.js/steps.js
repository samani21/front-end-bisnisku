import styled from "styled-components";

export const StepsContainer = styled.div`
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
    color: #1A202C;
`;

export const Section = styled.section`
    padding: 80px 20px;
    background-color: #f9f9f9;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    h2 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px;
        }

    .subtitle {
        font-size: 18px;
        color: #4A5568;
        margin-bottom: 50px;
        }
`;

export const Steps = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    position: relative;
    z-index: 1;
    @media (max-width: 1055px) {
        grid-template-columns: repeat(2, minmax(220px, 1fr));
    }
    @media (max-width: 535px) {
        grid-template-columns: repeat(1, minmax(220px, 1fr));
    }
`;

export const Step = styled.div`
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }
`;

export const Arrow = styled.div`
    display: none;
    @media (min-width: 1055px) {
        display: block;
        position: relative;
        top: 150px;
        transform: translateY(-50%);
        width: 100%;
        height: 1px;
        background: #CBD5E0;
        z-index: 0;
    }
`;

export const Icon = styled.img`
    width: 80px;
    margin-bottom: 20px;
`;

export const StepTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2D3748;
`

export const StepDesc = styled.div`
    font-size: 14px;
    color: #4A5568;
    line-height: 1.6;
`
