import { Container, FeaturDesc, FeatureBox, FeatureContainer, FeaturIcon, FeaturTitle, Grid } from '@/components/landingPage.js/feature'
import React from 'react'

function Feature() {
    return (
        <FeatureContainer>
            <Container>
                <h1>Fitur Unggulan untuk Bisnis yang Lebih Efisien</h1>
                <p class="subtitle">Dapatkan kendali penuh atas keuangan, produk, dan performa bisnis Anda dengan fitur lengkap dalam satu aplikasi.</p>
                <Grid>
                    <FeatureBox>
                        <FeaturIcon>💳</FeaturIcon>
                        <FeaturTitle>Pembayaran & Transaksi Online</FeaturTitle>
                        <FeaturDesc>Integrasi dengan berbagai metode pembayaran (e-wallet, transfer bank, kartu kredit) & Histori transaksi otomatis tercatat.</FeaturDesc>
                    </FeatureBox>
                    <FeatureBox>
                        <FeaturIcon>📦</FeaturIcon>
                        <FeaturTitle>Manajemen Stok & Inventaris</FeaturTitle>
                        <FeaturDesc>Pantau stok produk secara real-time & Notifikasi jika stok hampir habis.</FeaturDesc>
                    </FeatureBox>
                    <FeatureBox>
                        <FeaturIcon>👥</FeaturIcon>
                        <FeaturTitle>Multi-User & Hak Akses</FeaturTitle>
                        <FeaturDesc>Berikan akses ke tim dengan level otorisasi berbeda & Keamanan data tetap terjaga.</FeaturDesc>
                    </FeatureBox>
                    <FeatureBox>
                        <FeaturIcon>📊</FeaturIcon>
                        <FeaturTitle>Laporan Keuangan Otomatis</FeaturTitle>
                        <FeaturDesc>Grafik analisis pemasukan & pengeluaran & Export laporan ke PDF/Excel untuk akuntansi.</FeaturDesc>
                    </FeatureBox>
                    <FeatureBox>
                        <FeaturIcon>🏷️</FeaturIcon>
                        <FeaturTitle>Pemasaran & Promosi</FeaturTitle>
                        <FeaturDesc>Fitur diskon & kupon untuk menarik pelanggan & Integrasi dengan media sosial untuk promosi.</FeaturDesc>
                    </FeatureBox>
                    <FeatureBox>
                        <FeaturIcon>📈</FeaturIcon>
                        <FeaturTitle>Dashboard Interaktif</FeaturTitle>
                        <FeaturDesc>Visualisasi data bisnis yang memudahkan analisis kinerja usaha.</FeaturDesc>
                    </FeatureBox>
                </Grid>
            </Container>
        </FeatureContainer>
    )
}

export default Feature
