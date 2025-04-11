import styled from "styled-components";

export const PricingComponent = styled.div`
    padding: 5rem 5%;
    background-color: #f9f9f9;

    h2{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`;

export const Plans = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Plan = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    position: relative;
    transition: transform 0.3s;
    &:hover{
        transform: translateY(-5px);
    }

    &.recommended{
        border: 2px solid var(--primary-color);
    }
`;

export const RecomendedBadge = styled.div`
    position: absolute;
    top: -15px;
    right: 20px;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
`;

export const Price = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin: 1rem 0;
    span{
        font-size: 1rem;
        color: #666;
        font-weight: normal;
    }
`;

export const Features = styled.div`
    list-style: none;
    margin: 1.5rem 0;

    li{
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
    }
`;

/* Countdown Timer Styles */

export const CountDownBanner = styled.div`
    background-color: var(--primary-color);
    color: white;
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    p{
        margin: 0;
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

export const CountDownTimer = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    align-items: center;
`;

export const Time = styled.div`
    background-color: rgba(255,255,255,0.2);
    padding: 0.5rem 0.8rem;
        border-radius: 6px;
        min-width: 50px;
        display: inline-block;
        text-align: center;
    p{
        font-size: 15px;
        text-align: center;
    }
`;

export const ButtonOpenModal = styled.button`
    background: white;
    color: var(--primary-color);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
`;

export const ButtonCTA = styled.button`
     background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
    &:hover{
        background-color: var(--secondary-color);
    }
`;