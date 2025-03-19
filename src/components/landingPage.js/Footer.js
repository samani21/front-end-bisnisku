import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #f9f9f9;
    padding: 40px 20px;
    font-family: Arial, sans-serif;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
`;

export const FooterColumn = styled.div`
    flex: 1 1 180px;
    margin: 20px;
    h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }
    ul {
        list-style: none;
        padding: 0;
    }

    ul li {
        margin-bottom: 8px;
    }

    ul li a {
        text-decoration: none;
        color: #333;
        transition: 0.3s;
    }

    ul li a:hover {
        color: #007bff;
    }

`;

export const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const Logo = styled.img`
    width: 120px;
    margin-right: 10px;
`;

export const FooterBottom = styled.div`
    text-align: center;
    padding-top: 20px;
    font-size: 14px;
    color: #666;
    border-top: 1px solid #ddd;
`;