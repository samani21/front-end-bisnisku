import styled from "styled-components";

export const ThemeComponent = styled.div`
    padding: 5rem 5%;
    background-color: #f9f9f9;
    h2{
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`
export const Options = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Option = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
`;


export const ThemePreview = styled.div`
    width: 100%;
    height: 150px;
    border-radius: 6px;
    margin-bottom: 1rem;
    &.light-theme {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    &.dark-theme {
        background: linear-gradient(135deg, #212529 0%, #343a40 100%);
    }

    &.professional-theme {
        background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
    }
`;
