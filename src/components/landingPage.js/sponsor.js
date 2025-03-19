import styled from "styled-components";

export const SponsorContainer = styled.div`
    padding: 50px 20px;
    background: #f9fafc;
    text-align: center;

    h2{
        font-size: 24px;
        margin-bottom: 30px;
        color: #333;
    }
`;

export const SponsorLogos = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
`;

export const SponsorItem = styled.div`
    width: 120px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
`;

export const SponsorImage = styled.img`
    max-width: 100%;
    max-height: 40px;
    object-fit: contain;
`;