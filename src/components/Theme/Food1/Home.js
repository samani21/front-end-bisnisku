import styled from "styled-components";

export const HomeContainer = styled.div`
    /* height: 100vh; */
    width: 100%;
    margin-bottom: 80px;
    margin-top: 50px;
`;

export const SearchContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Search = styled.div`
    background: #fff;
    margin-top: 30px;
    height: 50px;
    width: 90%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    box-shadow: 0px 1px 2px 1px rgba(7, 7, 7, 0.034);
`;

export const InputSearch = styled.input`
    background: fixed;
    border: none;
    outline: none; /* hilangkan border biru saat focus */
    color: #757776;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder{
        color: gray;
    }
`;

export const IconSearch = styled.img`

`;


export const CategoriesContainer = styled.div`
`;

export const CategoriesTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    h3{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 28px;
    }

    p{
        color: #999e9c;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
    }
`;

export const Categories = styled.div`
    padding: 10px;
    display: flex;
    justify-content: left;
    overflow: auto;
    gap: 10px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const ListCategories = styled.div`
    display: flex;
    justify-content: left;
    overflow: auto;
    gap: 10px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const CardCategories = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 20px;
    background-image: url(${(props) => props?.image});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 4px 0px rgba(7, 7, 7, 0.164);
`;

export const NamaCategorie = styled.div`
    width: 150px;
    background: linear-gradient(to top, #fff 80%, rgba(255, 255, 255, 0.185) 100%);
    /* background: red; */
    padding: 10px;
    position: relative;
    bottom: -53px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    h3{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
    }
`;

export const MenuCategory = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const Menus = styled.div`
    font-family: "Boldonse", system-ui;
    font-weight: 400;
    font-size: 25px;
    width: 100%;
    white-space: nowrap;
    color: #e6e8e9;
    cursor: pointer;

    &.active{
        color: #485052;
    }
`;

export const ProductContainer = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
    justify-content: center;
    gap: 10px;
    @media (max-width: 350px) {
       grid-template-columns: repeat(2,1fr);
       justify-content: center;
    }
`;

export const CardProdoct = styled.div`
    display: #fff;
    height: 250px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 3px 4px 0px rgba(7, 7, 7, 0.164);
    cursor: pointer;
    h3{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #474a49;
        text-align: left;
        padding: 10px;
        height: 110px;
    }
    p{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: #434846;
        text-align: right;
        padding: 10px;
    }
    &:hover{
        transform: scale(1.05);
    }
`;

export const ImageProduct = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${(props) => props?.image});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;