import { Container, FooterBottom, FooterColumn, FooterContainer, FooterLogo, Logo } from '@/components/landingPage.js/Footer'
import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterColumn>
                    <FooterLogo>
                        <Logo src="./icon/logo.png" alt="Bisnisku Logo" />
                    </FooterLogo>
                    <p>Bisnisku adalah solusi terbaik untuk membantu Anda mengelola bisnis dengan mudah, mulai dari pencatatan keuangan hingga e-commerce. Kami hadir untuk membantu bisnis Anda berkembang!</p>
                </FooterColumn>
                <FooterColumn>
                    <h4>Perusahaan</h4>
                    <ul>
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Layanan</a></li>
                        <li><a href="#">Komunitas</a></li>
                        <li><a href="#">Testimoni</a></li>
                    </ul>
                </FooterColumn>

                <FooterColumn>
                    <h4>Pengembang</h4>
                    <ul>
                        <li><a href="#">Teknologi Web</a></li>
                        <li><a href="#">Panduan Pengembangan</a></li>
                        <li><a href="#">API & Integrasi</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </FooterColumn>

                <FooterColumn>
                    <h4>Komunitas</h4>
                    <ul>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Grup Bisnis</a></li>
                        <li><a href="#">Live Chat</a></li>
                    </ul>
                </FooterColumn>

                <FooterColumn>
                    <h4>Kontak</h4>
                    <ul>
                        <li><a href="tel:+6281254130919">📞 +62 812 5413 0919</a></li>
                        <li><a href="mailto:eksloba21@gmail.com">✉️ eksloba21@gmail.com</a></li>
                    </ul>
                </FooterColumn>
            </Container>
            <FooterBottom>
                <p>&copy; 2025 SyntaxProject</p>
            </FooterBottom>
        </FooterContainer>
    )
}

export default Footer
