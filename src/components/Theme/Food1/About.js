import styled from "styled-components";

export const AboutContainer = styled.div`
    font-family: "Inter", sans-serif;
`;

export const HeaderContainer = styled.div`
    /* background: red; */
    padding: 10px;
    position: relative;
    bottom: 15px;
`;

export const Background2Container = styled.div`
    padding: 15px;
    width: 100%;
    position: relative;
    bottom: 140px;
`;

export const BackgroundSecondary = styled.div`
    background: #aa98e7;
    height: 80px;
    width: 100%;
    border-radius: 20px;
    filter: brightness(100%);
`;
export const Background3Container = styled.div`
    padding: 35px;
    width: 100%;
`;

export const BackgroundThird = styled.div`
    background: #dfdce0;
    height: 80px;
    width: 100%;
    border-radius: 20px;
    filter: drop-shadow(2px 3px 6px #00000069);
`;

export const BackgroundPrimary = styled.div`
    background: #84b7f8;
    height: 80px;
    width: 100%;
    position: relative;
    bottom: 245px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
    b{

    }
`;

export const LogoBisnis = styled.img`
    width: 60px;
    background: ${(props) => props?.color};
    border-radius: 30px;
    padding: 4px;
`;

export const ContentContainer = styled.div`
    padding: 10px;
    position: relative;
    bottom: 215px;
    width: 100%;
`;

export const CardDetail = styled.div`
    background: #f3f3f3;
    box-shadow: 0 7px 10px 0px #00000021;
    width: 100%;
    margin-bottom: 10px;
    p{
        padding: 10px;
    }
`;

export const Title = styled.div`
    border-bottom: 1px dashed gray;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconDetail = styled.img`
    
`;
