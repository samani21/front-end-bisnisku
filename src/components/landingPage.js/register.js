import styled from "styled-components";

export const RegisterComponent = styled.div`
    padding: 5rem 5%;
    background-color: white;
    h2{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`;

export const StepsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;


export const Step = styled.div`
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s;
    
    &:hover{
        transform: translateY(-5px);
    }
`;

export const StepNumber = styled.div`
    background-color: var(--primary-color);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto 1rem;
`;