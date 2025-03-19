import styled from "styled-components";

export const PricingContainer = styled.div`
    font-family: 'Inter', sans-serif;
    background: #f8f9fb;
    padding: 50px 20px;
    color: #1c1c1c;
    position: relative;
`;

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    h1 {
        font-size: 36px;
        font-weight: 700;
        color: #0d1b2a;
        margin-bottom: 10px;
        }

    p {
        font-size: 18px;
        color: #555;
        margin-bottom: 50px;
        max-width: 700px;
        margin-inline: auto;
        }
`;

export const CardsContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Card = styled.div`
    background: #ffffff;
    border-radius: 20px;
    padding: 35px 25px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }

     h2 {
        font-size: 22px;
        margin: 50px 0 5px;
        font-weight: 600;
        }

    .price {
        font-size: 28px;
        font-weight: 700;
        margin: 15px 0;
        color: #0d1b2a;
        }

    .price small {
        font-weight: normal;
        font-size: 14px;
        color: #555;
        }
    ul {
        text-align: left;
        list-style: none;
        margin-top: 20px;
        }

    ul li {
        margin: 10px 0;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #333;
        gap: 8px;
        }

    ul li::before {
        content: "✓";
        color: #4c5fd5;
        font-weight: bold;
        font-size: 16px;
        }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Budget = styled.div`
    position: absolute;
    top: 20px;
    background: #4c5fd5;
    color: #fff;
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 500;
`;

export const Button = styled.button`
    background: #4c5fd5;
    color: #fff;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    cursor: pointer;
    margin: 20px 0;
    font-weight: 600;
    transition: background 0.3s ease;

    &:hover {
        background: #3b4dbd;
    }

`;

export const CountDownOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    display: ${(props) => props?.close ? "none" : ""};
`;

export const CountDownBox = styled.div`
    background: #fff;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    @media (max-width: 400px) {
        width: 90%;
    }
    h3{
        font-size: 20px;
        margin-bottom: 15px;
        color: #0d1b2a;
    }
`;

export const CountDown = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #4c5fd5;
    padding: 0px 40px 30px;
    span{
        font-size: 22px;
        color: #0d1b2a;
    }
`;

export const CloseButtonContainer = styled.div`
    width: 100%;
    padding-right: 10px;
    position: relative;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: right;
    align-items: center;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 30px;
    color: #888;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover{
        color: #000;
    }
    @media (max-width: 400px) {
        right: -120px;
    }
`;