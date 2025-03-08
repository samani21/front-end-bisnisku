import { CopyRight, FooterContainer, Icon, Left, Logo, Navigasi, Right, SubTitle } from '@/components/landingPage.js/Footer'
import React from 'react'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Left>
                    <Logo src='./icon/logo.png' />
                    <SubTitle>
                        Bisnisku adalah solusi terbaik untuk membantu Anda mengelola bisnis dengan mudah, mulai dari pencatatan keuangan hingga e-commerce. Kami hadir untuk membantu bisnis Anda berkembang!
                    </SubTitle>
                </Left>
                <Right>
                    <Navigasi>
                        Perusahaan
                        <SubTitle>
                            Tentang Kami
                        </SubTitle>
                        <SubTitle>
                            Layanan
                        </SubTitle>
                        <SubTitle>
                            Komunitas
                        </SubTitle>
                        <SubTitle>
                            Testimoni
                        </SubTitle>
                    </Navigasi>
                    <Navigasi>
                        Pengembang
                        <SubTitle>
                            Teknologi Web
                        </SubTitle>
                        <SubTitle>
                            Panduan Pengembangan
                        </SubTitle>
                        <SubTitle>
                            API & Integrasi
                        </SubTitle>
                        <SubTitle>
                            Blog
                        </SubTitle>
                    </Navigasi>
                    <Navigasi>
                        Komunitas
                        <SubTitle>
                            Forum
                        </SubTitle>
                        <SubTitle>
                            Grup Bisnis
                        </SubTitle>
                        <SubTitle>
                            Live Chat
                        </SubTitle>
                    </Navigasi>
                    <Navigasi>
                        Kontak
                        <SubTitle style={{ display: "flex", alignItems: "center" }}>
                            <Icon src='./icon/phone.png' />
                            +62 812 5413 0919
                        </SubTitle>
                        <SubTitle style={{ display: "flex", alignItems: "center" }}>
                            <Icon src='./icon/mail.png' />
                            eksloba21@gmail.com
                        </SubTitle>

                    </Navigasi>
                </Right>
            </FooterContainer>
            <CopyRight>
                © 2025 SyntaxProject.
            </CopyRight>
        </>
    )
}

export default Footer
