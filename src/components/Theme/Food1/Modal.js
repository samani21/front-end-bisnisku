import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    height: 100vh;
    bottom: 0;
    background: #00000071;
    width: 100%;
    z-index: 2;
    font-family: "Poppins" sans-serif;
`;

export const ContentContainer = styled.div`
    position: absolute;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 85vh;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    `;

export const HeaderContent = styled.div`
    background: url(${(props) => props?.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 250px;
    padding: 20px 10px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`;

export const IconContainer = styled.div`
    background: #00000088;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    width: 35px;
    height: 35px;
    cursor: pointer;
`;
export const IconBack = styled.img`
    margin-left: 7px;
`;

export const NameProduct = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props?.color};
`;

export const Content = styled.div`
    padding: 20px;
`;

export const TipeContainer = styled.div`
    margin-top: 20px;
    p{
        font-size: 18px;
    }
`;

export const ListTipe = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
`;

export const Tipe = styled.div`
    padding: 10px;
    border-radius: 30px;
    background: ${(props) => props?.color};
    color: ${(props) => props?.textColor};
    cursor: pointer;
    &:hover{
        background: ${(props) => props?.colorActive};
        filter: brightness(85%);
    }
    &.active{
        background: ${(props) => props?.colorActive};
    }
`;

export const TotalContainer = styled.div`
    margin-top: 20px;
    p{
        font-size: 18px;
    }
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        gap: 10px;
    }
`;

export const Total = styled.div`
    background: ${(props) => props?.color};
    width: 100%;
    text-align: center;
    border-radius: 30px;
    padding: 10px;
`;

export const IconPlusMinus = styled.img`
    background: #00000028;
    border-radius: 30px;
    cursor: pointer;
`

export const ButtonPesan = styled.div`
    background: ${(props) => props.color};
    color: ${(props) => props.textColor};
    padding: 10px;
    border-radius: 30px;
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
`;