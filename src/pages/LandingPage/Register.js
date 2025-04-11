import { RegisterComponent, Step, StepNumber, StepsContainer } from '@/components/landingPage.js/register'
import React from 'react'

const Register = () => {
    return (
        <RegisterComponent>
            <h2>Cara Kerja Aplikasi Kami</h2>
            <StepsContainer>
                <Step>
                    <StepNumber>1</StepNumber>
                    <h3>Daftar Akun</h3>
                    <p>Buat akun dengan email atau media sosial & atur profil bisnis Anda dalam hitungan menit.</p>
                </Step>
                <Step>
                    <StepNumber>2</StepNumber>
                    <h3>Input Data Bisnis</h3>
                    <p>Masukkan pemasukan, pengeluaran, daftar produk dan kelola transaksi serta stok dengan mudah.</p>
                </Step>
                <Step>
                    <StepNumber>3</StepNumber>
                    <h3>Analisis dan Pantau</h3>
                    <p>Lihat laporan keuangan, grafik interaktif, dan optimalkan strategi bisnis berdasarkan data real-time.</p>
                </Step>
                <Step>
                    <StepNumber>4</StepNumber>
                    <h3>Export Data</h3>
                    <p>Unduh laporan keuangan dan data bisnis dalam format PDF atau Excel dengan mudah.</p>
                </Step>
            </StepsContainer>
        </RegisterComponent>
    )
}

export default Register
