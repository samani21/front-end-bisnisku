import styled from "styled-components";

export const HeroContainer = styled.div`
    background-image:url('./background/backgroundhero.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 10px;
    @media (max-width: 500px) {
      height:80vh;
    }
`;


export const Content = styled.div`
    position: relative;
    top: 100px;
    display: grid;
    justify-content: center;
    gap: 10px;
`;

export const Title = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    span{
        color: #007aec;
    }
     @media (max-width: 500px) {
        font-size: 26px;
    }
`;
export const SubTitle = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
     @media (max-width: 500px) {
        font-size: 18px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    background: #3e57da;
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    span{
        margin-top: 10px;
    }
    &:hover{
        background: #1f235b;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; /* Sesuaikan ukuran maksimal */
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(to right, #e0eafc, #cfdef3); /* Efek gradasi */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const ListenButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: white;
  border: none;
  padding: 10px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 2;
  &:hover {
    background: #f0f0f0;
  }
`;

export const MuteIcon = styled.span`
  width: 16px;
  height: 16px;
  background: black;
  mask: url("./icon/mute.svg") no-repeat center / contain;
`;
export const UnMuteIcon = styled.span`
  width: 16px;
  height: 16px;
  background: black;
  mask: url("./icon/unmute.svg") no-repeat center / contain;
`;