import styled from "styled-components";

export const FeatureComponent = styled.div`
    padding: 5rem 5%;
    background-color: #f9f9f9;
    h2{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Card = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;

    h3{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }
    
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
`;