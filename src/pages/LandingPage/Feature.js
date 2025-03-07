import { Content, FeatureContainer, IconContainer, IconFeature, ListFeatureContainer, SubTitle, SubTitleFeature, Title, TitleFeature } from '@/components/landingPage.js/feature'
import React from 'react'

function Feature() {
    return (
        <FeatureContainer>
            <Title>Fitur Unggulan untuk Bisnis yang Lebih Efisien</Title>
            <SubTitle>Dapatkan kendali penuh atas keuangan, produk, dan performa bisnis Anda dengan fitur lengkap dalam satu aplikasi.</SubTitle>
            <Content>
                <ListFeatureContainer className='feature-1'>
                    <IconContainer>
                        <IconFeature src='./icon/payment.svg' />
                    </IconContainer>
                    <TitleFeature>Pembayaran & Transaksi Online</TitleFeature>
                    <SubTitleFeature>Integrasi dengan berbagai metode pembayaran (e-wallet, transfer bank, kartu kredit) & Histori transaksi otomatis tercatat.</SubTitleFeature>
                </ListFeatureContainer>
                <ListFeatureContainer className='feature-2'>
                    <IconContainer>
                        <IconFeature src='./icon/product.svg' />
                    </IconContainer>
                    <TitleFeature>Manajemen Stok & Inventaris</TitleFeature>
                    <SubTitleFeature>Pantau stok produk secara real-time & Notifikasi jika stok hampir habis.</SubTitleFeature>
                </ListFeatureContainer>
                <ListFeatureContainer className='feature-3'>
                    <IconContainer>
                        <IconFeature src='./icon/users.svg' />
                    </IconContainer>
                    <TitleFeature>Multi-User & Hak Akses</TitleFeature>
                    <SubTitleFeature>Berikan akses ke tim dengan level otorisasi berbeda & Keamanan data tetap terjaga.</SubTitleFeature>
                </ListFeatureContainer>
                <ListFeatureContainer className='feature-4'>
                    <IconContainer>
                        <IconFeature src='./icon/finance.svg' />
                    </IconContainer>
                    <TitleFeature>Laporan Keuangan Otomatis</TitleFeature>
                    <SubTitleFeature>Grafik analisis pemasukan & pengeluaran & Export laporan ke PDF/Excel untuk akuntansi.</SubTitleFeature>
                </ListFeatureContainer>
                <ListFeatureContainer className='feature-5'>
                    <IconContainer>
                        <IconFeature src='./icon/promo.svg' />
                    </IconContainer>
                    <TitleFeature>Pemasaran & Promosi</TitleFeature>
                    <SubTitleFeature>Fitur diskon & kupon untuk menarik pelanggan & Integrasi dengan media sosial untuk promosi.</SubTitleFeature>
                </ListFeatureContainer>
                <ListFeatureContainer className='feature-6'>
                    <IconContainer>
                        <IconFeature src='./icon/dashboard.svg' />
                    </IconContainer>
                    <TitleFeature>Dashboard Interaktif</TitleFeature>
                    <SubTitleFeature>Visualisasi data bisnis yang memudahkan analisis kinerja usaha.</SubTitleFeature>
                </ListFeatureContainer>
            </Content>
        </FeatureContainer>
    )
}

export default Feature
