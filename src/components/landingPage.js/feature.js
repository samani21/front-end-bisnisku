import styled from "styled-components";

export const FeatureContainer = styled.div`
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
    color: #1A202C;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 20px;
    text-align: center;
    h1{
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
    }

    .subtitle p{
        font-size: 16px;
        color: #4A5568;
        margin-bottom: 40px;
        text-align: center;
    }
    @media (max-width: 768px) {
        h1{
            font-size: 26px;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    gap: 20px;
    @media (max-width: 845px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }
    @media (max-width: 575px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
    }
`;

export const FeatureBox = styled.div`
    background: #ffffff;
    border: 1px solid #E2E8F0;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
    &:hover{
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        background: #F7FAFC;
    }
`;

export const FeaturIcon = styled.div`
    font-size: 48px;
    margin-bottom: 15px;
    color: #2D3748;
    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

export const FeaturTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;
export const FeaturDesc = styled.div`
    font-size: 14px;
    color: #4A5568;
    line-height: 1.6;
`;
