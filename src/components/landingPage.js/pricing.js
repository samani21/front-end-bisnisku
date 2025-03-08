import styled from "styled-components";

export const PricingContainer = styled.div`
    background: #D6E7F3;
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
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1,1fr);
    }
`;


export const CardPricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const CardPricing = styled.div`
    background: #fff;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
`;

export const DetailPrice = styled.div`
    display: grid;
    gap: 20px;
    margin-top: ${(props) => props?.rekomendasi ? "-10px" : "40px"};
`;

export const Rekomendasi = styled.div`
    position: relative;
    top: -30px;
    background: #3e57da;
    border-radius: 30px;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 600;
`;
export const SetRekomendasi = styled.div`

`;

export const TitlePrice = styled.p`
    color: #162B60;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 600;
`;
export const SubtitlePrice = styled.p`
    color: #8690AB;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 400;
`;

export const TotalPrice = styled.p`
    color: #162B60;
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 600;
    span{
        font-size: 14px;
    }
`;

export const ButtonLangganan = styled.div`
    font-family: "Roboto", sans-serif;
    background: #162B60;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 20px;
`;

export const ListFeature = styled.div`
    margin-top: 20px;
    display: grid;
    gap: 5px;
`;

export const Feature = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 6px;
`;
export const TitleFeature = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 600;
`;

export const IconCeklist = styled.img`
    width: 20px;
`;