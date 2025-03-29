import styled from "styled-components";

export const PaymentContainer = styled.div`
    padding: 10px;
    font-family: "Poppins", sans-serif;
    background: #f9fbfc;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const IconArrowLeft = styled.img`
    width: 30px;
`;

export const TitleHeader = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const ListBills = styled.div`
    margin-top: 20px;
    background: #f3f5f7;
    border-radius: 20px;
    width: 100%;
    padding: 10px 10px 20px 10px;
`;

export const HeaderList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    
    .item{
        width: 48%;
    }
    .price{
        width: 30%;
        font-weight: 500;
    }
    .qty{
        font-weight: 500;
        width: 15%;
        text-align: center;
    }
`;

export const ListContainer = styled.div`
    margin-top: 10px;
    height: 45vh;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const List = styled.div`
    border-bottom: 1px solid #e4e6e8;
    .tipe{
        font-size: 14px;
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 10px 0px 0px 0px;
    .item{
        width: 48%;
    }
    .price{
        width: 30%;
        font-weight: 500;
    }
    .qty{
        font-weight: 500;
        width: 15%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`

export const IconSvg = styled.img`
    width: 15px;
    cursor: pointer;
`

export const Amount = styled.div`
    margin-top: 20px;
    background: #f3f5f7;
    border-radius: 20px;
    width: 100%;
    padding: 10px 10px 20px 10px;
    .ppn{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .amount{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
    }
`;


export const ButtonCheck = styled.div`
    background: #0e5053;
    color: white;
    text-align: center;
    margin-top: 30px;
    padding: 10px 0px;
    border-radius: 30px;
    cursor: pointer;
    &:hover{
        filter: brightness(140%);
    }
`;

export const ButtonBack = styled.div`
    border:1px solid #0e5053;
    color: black;
    text-align: center;
    margin-top: 10px;
    padding: 10px 0px;
    border-radius: 30px;
    cursor: pointer;
`;
