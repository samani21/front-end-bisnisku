import styled from "styled-components";

export const HeroContainer = styled.div`
  padding: 80px 0;
  font-family: 'Arial', sans-serif;
  color: #222;
  background: linear-gradient(135deg, #e0f0ff, #ffffff);
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  h1 span {
    color: #3c5bfa;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;


export const VideSection = styled.div`
  flex: 1;
`;

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.a`
  background: #3c5bfa;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
  &:hover{
    background: #2b4ada;
  }
`;