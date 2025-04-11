import styled, { keyframes } from "styled-components";
const modalFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CountdownModal = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 1000;
    align-items: center;
    justify-content: center;
`;


export const Content = styled.div`
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    text-align: center;
    position: relative;
    animation: ${modalFadeIn} 0.3s;
`;

export const CloseModal = styled.div`
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    color: #666;
    transition: color 0.3s;

    &:hover{
        color: var(--primary-color);
    }
`;

export const ModalContDown = styled.div`
    display: flex;
    justify-content: center;
    gap: 1px;
    margin: 2rem 0;
`;

export const CountDownSegment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--primary-color);
        min-width: 80px;
    }

    small{
        font-size: 0.9rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`;

export const ButtonClose = styled.button`
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