import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  overflow: auto;
  font-family: 'Inter', sans-serif;
  background: #F4F4F4;
  line-height: 1.7;
  color: #1f2937;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  padding: 1px 10px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 60px;
  padding: 0 20px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  margin-top: 80px;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
  }

  p {
    font-size: 1.1rem;
    color: #6b7280;
    margin-top: 10px;
  }
`;

export const PricingCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 350px) {
        padding: 10px;
    }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  width: 340px;
  text-align: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    color: #003366;
  }

  p {
    font-size: 2.2rem;
    font-weight: 700;
    color: #FF6600;
    margin: 24px 0;
  }

  .desc{
    font-size: 0.95rem;
    color: #6b7280;
    margin-bottom: 16px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  &.popular {
    border: 2px solid #2563eb;

    &::before {
      content: "Populer";
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #2563eb;
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 9999px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
    }
    @media (max-width: 350px) {
        width: 100%;
    }
`;

export const Feature = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  margin-bottom: 32px;

  li {
    position: relative;
    padding-left: 28px;
    margin: 14px 0;
    color: #0077B5;
    font-size: 1rem;
  }

  li::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  padding: 14px 30px;
  border-radius: 8px;
  display: inline-block;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;
