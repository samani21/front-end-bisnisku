import styled from 'styled-components';

export const TestimoniContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
`;

export const Title = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    padding: 0px 10px;
    @media (max-width: 500px) {
        font-size: 24px;
    }
`;

export const SubTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    padding: 0px 10px 10px 10px;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Content = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
    cursor: grab;
    user-select: none;
`;

export const CardTestimoni = styled.div`
    background: #F5F5F3;
    border-radius: 20px;
    height: 300px;
    /* box-shadow: 0px 0px 0px 2px #00000050; */
    padding: 20px;
    scroll-snap-align: start;
    margin-top: 10px;
    margin-bottom: 10px;
`;


export const ContentTestimoni = styled.div`
    width: 200px;
`;

export const HeaderTester = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
`;

export const NameToko = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ImageTester = styled.img`
    width: 50px;
    border-radius: 50px;
`;

export const Comment = styled.p`
     font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    max-width: 100%; /* Sesuaikan sesuai kebutuhan */
    height: 114px; /* Sesuaikan tinggi */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7; /* Batasi jumlah baris */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;