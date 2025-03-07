import styled from "styled-components";

export const FeatureContainer = styled.div`
    width: 100%;
    padding: 40px;
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 10px;
`;

export const Title = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
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
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    @media (max-width: 1150px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1,1fr);
    }
`;

export const ListFeatureContainer = styled.div`
    display: grid;
    gap: 10px;
    padding: 10px;
    &.feature-1{
        border-right: 1px solid #969494;
    }
    &.feature-2{
        border-right: 1px solid #969494;
    }
    &.feature-4{
        border-right: 1px solid #969494;
        border-top: 1px solid #969494;
    }
    &.feature-5{
        border-right: 1px solid #969494;
        border-top: 1px solid #969494;
    }
    &.feature-6{
        border-top: 1px solid #969494;
    }
    @media (max-width: 1150px) {
        &.feature-1{
            border-right: 1px solid #969494;
        }
        &.feature-2{
            border-right: none;
        }
        &.feature-3{
            border-right: 1px solid #969494;
            border-top: 1px solid #969494;
        }
        &.feature-4{
            border-right: none;
            border-top: 1px solid #969494;
        }
        &.feature-5{
            border-right: 1px solid #969494;
            border-top: 1px solid #969494;
        }
        &.feature-6{
            border-top: 1px solid #969494;
        }
    }
    @media (max-width: 500px) {
        &.feature-1{
            border-right: none;
        }
        &.feature-2{
            border-top: 1px solid #969494;
            border-right: none;
        }
        &.feature-3{
            border-top: 1px solid #969494;
            border-right: none;
        }
        &.feature-4{
            border-top: 1px solid #969494;
            border-right: none;
        }
        &.feature-5{
            border-top: 1px solid #969494;
            border-right: none;
        }
        &.feature-6{
            border-top: 1px solid #969494;
            border-right: none;
        }
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconFeature = styled.img`
    width: 80px;
    @media (max-width: 500px) {
        width: 50px;
    }
`;

export const TitleFeature = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const SubTitleFeature = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`;