import styled from "styled-components";

export const TestimonyComponent = styled.div`
    padding: 5rem 5%;
    background-color: white;
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
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    position: relative;

    &::before{
        content: '"';
        font-size: 5rem;
        color: rgba(67, 97, 238, 0.1);
        position: absolute;
        top: 0;
        left: 1rem;
        line-height: 1;
    }
`;


export const Quote = styled.div`
    font-style: italic;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
`;

export const Author = styled.div`
    font-weight: 600;
    color: var(--primary-color);
`;