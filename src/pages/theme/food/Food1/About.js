import { AboutContainer, Background2Container, Background3Container, BackgroundPrimary, BackgroundSecondary, BackgroundThird, CardDetail, ContentContainer, HeaderContainer, IconDetail, LogoBisnis, Title } from '@/components/Theme/Food1/About'
import React from 'react'

const About = (props) => {
    const { data } = props
    return (
        <AboutContainer>
            <HeaderContainer>
                <Background3Container>
                    <BackgroundThird />
                </Background3Container>
                <Background2Container>
                    <BackgroundSecondary color={data?.color_primary} />
                </Background2Container>
                <BackgroundPrimary>
                    <LogoBisnis src={data?.logo} color={data?.color_secondary} />
                    <div>
                        <b>{data?.nama}</b>
                        <p>{data?.email}</p>
                    </div>
                </BackgroundPrimary>
            </HeaderContainer>
            <ContentContainer>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/icon-address.svg' />
                        <b>Alamat</b>
                    </Title>
                    <p>{data?.address}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/provinsi.svg' />
                        <b>Provinsi</b>
                    </Title>
                    <p>{data?.provinsi}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/kode-pos.svg' />
                        <b>Kode Pos</b>
                    </Title>
                    <p>{data?.pos}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/phone.svg' />
                        <b>No Telepon</b>
                    </Title>
                    <p>{data?.phone}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/web.svg' />
                        <b>Website</b>
                    </Title>
                    <p>{data?.url}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/time.svg' />
                        <b>Jam Operasional</b>
                    </Title>
                    <p>{data?.time_start} - {data?.time_end}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/tiktok.svg' />
                        <b>Tiktok</b>
                    </Title>
                    <p onClick={() => window.open(`https://www.tiktok.com/@${data?.tiktok}`)} style={{ cursor: "pointer" }}>{data?.tiktok}</p>
                </CardDetail>
                <CardDetail>
                    <Title>
                        <IconDetail src='/icon/instagram.svg' />
                        <b>Instagram</b>
                    </Title>
                    <p onClick={() => window.open(`https://www.instagram.com/${data?.instagram}/`)} style={{ cursor: "pointer" }}>{data?.instagram}</p>
                </CardDetail>
                {/* <CardDetail>
                    <Title>
                        <IconDetail src='/icon/facebook.svg' />
                        <b>Instagram</b>
                    </Title>
                    <p onClick={() => window.open(`https://web.facebook.com/sam'ani/`)} style={{ cursor: "pointer" }}>{data?.instagram}</p>
                </CardDetail> */}
            </ContentContainer>
        </AboutContainer>
    )
}

export default About
