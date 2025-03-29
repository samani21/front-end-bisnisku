import styled from "styled-components";

export const CategoriesContainer = styled.div`
    margin-top: 20px;
    padding: 10px;
    margin-bottom: 50px;
    margin-top: 50px;
    h5{
        font-family: 'Poppins', sans-serif;
        font-size: 23px;
        text-align: center;
        font-weight: 400;
        margin-bottom: 10px;
    }
`;

export const ListCategories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;  // optional, untuk memberi jarak antar item
    margin-bottom: 20px;
    @media (max-width: 350px) {
       grid-template-columns: repeat(2,1fr);
       justify-content: center;
    }
`;

export const CardCategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        transform: scale(1.05);
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
    @media (max-width: 350px) {
        height: 145px;
        width: 130px;
    }
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
        @media (max-width: 350px) {
            font-size: 18px;
        }
    }
`;
