import { Arrow, Container, Icon, Section, Step, StepDesc, Steps, StepsContainer, StepTitle } from '@/components/landingPage.js/steps'
import React from 'react'

const StepBySteps = () => {
    return (
        <StepsContainer>
            <Section>
                <Container>
                    <h2>Cara Kerja Aplikasi Kami</h2>
                    <p class="subtitle">Kelola bisnis Anda hanya dalam 4 langkah mudah!</p>
                    <Arrow />
                    <Steps Steps>
                        <Step>
                            <Icon src='./icon/register.svg' alt="Daftar Akun" />
                            <StepTitle>Daftar Akun</StepTitle>
                            <StepDesc>Buat akun dengan email atau media sosial & atur profil bisnis Anda dalam hitungan menit.</StepDesc>
                        </Step>
                        <Step>
                            <Icon src="./icon/input.svg" alt="Input Data Bisnis" />
                            <StepTitle>Input Data Bisnis</StepTitle>
                            <StepDesc>Masukkan pemasukan, pengeluaran, daftar produk dan kelola transaksi serta stok dengan mudah.</StepDesc>
                        </Step>
                        <Step>
                            <Icon src="./icon/analisis.svg" alt="Analisis dan Pantau" />
                            <StepTitle>Analisis dan Pantau</StepTitle>
                            <StepDesc>Lihat laporan keuangan, grafik interaktif, dan optimalkan strategi bisnis berdasarkan data real-time.</StepDesc>
                        </Step>
                        <Step>
                            <Icon src="./icon/report.svg" alt="Export Data" />
                            <StepTitle>Export Data</StepTitle>
                            <StepDesc>Unduh laporan keuangan dan data bisnis dalam format PDF atau Excel dengan mudah.</StepDesc>
                        </Step>
                    </Steps>
                </Container>
            </Section>
        </StepsContainer >
    )
}

export default StepBySteps
