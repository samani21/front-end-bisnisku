import styled from "styled-components";

export const PaymentContainer = styled.div`
    padding: 10px;
    font-family: "Poppins", sans-serif;
    background: #f9fbfc;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
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

export const TransaksiContainer = styled.div`
    height: 95vh;
    padding: 10px;
    color: #2C2C2E;
    background:#ffffff;
`;

export const Icon = styled.svg`
    width: 30px;
    height: 30px;
    fill: black;
    cursor: pointer;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    width: 100%;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
    background: #F2F3F5;
    padding: 10px;
    margin-top: 20px;
`;

export const Search = styled.img`

`;

export const InputSearch = styled.input`
    border: none;
    background: transparent;
    outline: none;
    &::placeholder{
        color: #8E8E93;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    
`;

export const Menu = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
    &.active{
        border-bottom: 2px solid #000000;
    }
`;

export const ListContent = styled.div`
    display: grid;
    gap: 10px;
    margin-top: 30px;
`;

export const CardTransaksi = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    justify-content: left;
    align-items: start;
    gap: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    cursor: pointer;
`;

export const LogoBisnis = styled.img`
    width: 40px;
    background: #f2f2f7;
    padding: 5px;
    border-radius: 30px;
`;

export const Details = styled.div`
    width: 100%;
    
`;

export const Tanggal = styled.p`
    color: #8e8e93;
    font-size: 12px;
    height: 10px;
    margin-top: 0px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    margin-bottom: 10px;
`;

export const TitleTransaksi = styled.p`
    color: #1C1C1E;
    font-size: 16px;
    height: 10px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    margin-bottom: 10px;
`;
export const NameBisnis = styled.p`
    color: #6e6e73;
    font-size: 14px;
    font-size: 400;
    font-family: "Inter", sans-serif;
    margin-bottom: 10px;
`;
export const Total = styled.p`
    color: #2e86de;
    font-size: 16px;
    text-align: right;
    margin-top: 0px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
`;
