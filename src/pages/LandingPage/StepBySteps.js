import { Content, Icon, IconContainer, IconResponsive, IconSteps, Steps, StepsArrow, StepsArrowResponsive, StepsArrowResponsiveMobile, StepsContainer, SubTitle, SubTitleSteps, Title, TitleSteps } from '@/components/landingPage.js/steps'
import React from 'react'

const StepBySteps = () => {
    return (
        <StepsContainer>
            <Title>
                Cara Kerja Aplikasi Kami
            </Title>
            <SubTitle>
                Hanya dalam 3 langkah mudah, kelola bisnis Anda dengan lebih efisien!
            </SubTitle>
            <Content>
                <Steps>
                    <IconContainer>
                        <IconSteps src='./icon/register.svg' />
                    </IconContainer>
                    <TitleSteps>
                        Daftar Akun
                    </TitleSteps>
                    <SubTitleSteps>
                        Buat akun dengan email atau media sosial & Atur profil bisnis Anda dalam hitungan menit.
                    </SubTitleSteps>
                </Steps>
                <StepsArrow>
                    <Icon src='./icon/arrow-right.svg' style={{ width: "50px", marginTop: "30px", background: "#00000000" }} />
                </StepsArrow>
                <StepsArrowResponsive>
                    <Icon src='./icon/arrow-right.svg' style={{ width: "50px", marginTop: "30px", background: "#00000000" }} />
                </StepsArrowResponsive>
                <StepsArrowResponsiveMobile>
                    <Icon src='./icon/arrow-down.svg' style={{ width: "50px", background: "#00000000" }} />
                </StepsArrowResponsiveMobile>
                <Steps>
                    <IconContainer>
                        <IconSteps src='./icon/input.svg' />
                    </IconContainer>
                    <TitleSteps>
                        Input Data Bisnis
                    </TitleSteps>
                    <SubTitleSteps>
                        Masukkan pemasukan, pengeluaran, daftar produk dan Kelola transaksi dan stok dengan mudah.
                    </SubTitleSteps>
                </Steps>
                <StepsArrow>
                    <Icon src='./icon/arrow-right.svg' style={{ width: "50px", marginTop: "30px", background: "#00000000" }} />
                </StepsArrow>
                <StepsArrowResponsiveMobile>
                    <Icon src='./icon/arrow-down.svg' style={{ width: "50px", background: "#00000000" }} />
                </StepsArrowResponsiveMobile>
                <StepsArrowResponsive>
                    <IconResponsive src='./icon/lien-horizontal.svg' style={{ width: "50px", marginTop: "30px", marginLeft: "20px", background: "#00000000" }} />
                    <IconResponsive src='./icon/arrow-down.svg' style={{ width: "50px", marginTop: "-29px", background: "#00000000" }} />
                </StepsArrowResponsive>
                <Steps>
                    <IconContainer>
                        <IconSteps src='./icon/analisis.svg' />
                    </IconContainer>
                    <TitleSteps>
                        Analisis dan Pantau
                    </TitleSteps>
                    <SubTitleSteps>
                        Lihat laporan keuangan, grafik interaktif dan Optimalkan strategi bisnis berdasarkan data real-time.
                    </SubTitleSteps>
                </Steps>
                <StepsArrow>
                    <Icon src='./icon/arrow-right.svg' style={{ width: "50px", marginTop: "30px", background: "#00000000" }} />
                    {/* <IconResponsive src='./icon/line.svg' style={{ width: "50px", marginTop: "30px", marginLeft: "21px", background: "#00000000" }} />
                    <IconResponsive src='./icon/arrow-left.svg' style={{ width: "50px", marginTop: "-30px", background: "#00000000" }} /> */}
                </StepsArrow>
                <StepsArrowResponsiveMobile>
                    <Icon src='./icon/arrow-down.svg' style={{ width: "50px", background: "#00000000" }} />
                </StepsArrowResponsiveMobile>
                <StepsArrowResponsive>
                    <IconResponsive src='./icon/line.svg' style={{ width: "50px", marginTop: "30px", marginLeft: "21px", background: "#00000000" }} />
                    <IconResponsive src='./icon/arrow-left.svg' style={{ width: "50px", marginTop: "-30px", background: "#00000000" }} />
                </StepsArrowResponsive>
                <Steps>
                    <IconContainer>
                        <IconSteps src='./icon/report.svg' />
                    </IconContainer>
                    <TitleSteps>
                        Export Data
                    </TitleSteps>
                    <SubTitleSteps>
                        Unduh laporan keuangan dan data bisnis dalam format PDF atau Excel.
                    </SubTitleSteps>
                </Steps>
            </Content>
        </StepsContainer>
    )
}

export default StepBySteps
