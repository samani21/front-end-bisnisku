import styled from "styled-components";

export const HeroComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding: 3rem 5%;
    }
`;

export const HeroContent = styled.div`
    flex: 1;
    padding-right: 2rem;
    h1{
        font-size: 3rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }
    p{
        font-size: 1.2rem;
        margin-bottom: 2rem;
        color: #666;
    }

    span{
        color: #3c5bfa;
    }
    @media (max-width: 768px) {
        padding-right: 0;
        margin-bottom: 2rem;
    }
`;

export const CtaButton = styled.button`
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover{
        background-color: var(--secondary-color);
    }
`;

export const HeroImage = styled.div`
    flex: 1;
`;

export const ImagePlaceholder = styled.div`
    width: 100%;
    height: 400px;
    background-color: #f0f0f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
`;