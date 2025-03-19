import styled from 'styled-components';

export const TestimoniContainer = styled.div`
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f9fafb;
    color: #2d3748;
    padding-bottom: 20px;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 40px 20px;
    
    h2 {
        text-align: center;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: bold;
        }

    .subtitle {
        text-align: center;
        color: #4a5568;
        margin-bottom: 40px;
        font-size: 16px;
        }
`;

export const Testimonials = styled.div`
    display: flex;
    gap: 30px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }

    cursor: grab;
    user-select: none;

    > div {
        flex: 0 0 auto;
        scroll-snap-align: center;
    }
    margin-left: 20px;
    margin-right: 20px;
`;


export const TestimonialCard = styled.div`
    background: #ffffff;
    padding: 25px 20px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: all 0.3s ease;
    width: 300px;
    margin-bottom: 30px;
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }
    
    h3{
        font-size: 16px;
        font-weight: 600;
        color: #2D3748;
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
        color: #4A5568;
        line-height: 1.6;
    }
`

export const IconLogo = styled.img`
    width: 60px;
    margin-bottom: 15px;
`;


export const Stars = styled.div`
    color: #FBBF24;
    font-size: 18px;
    margin-bottom: 10px;
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