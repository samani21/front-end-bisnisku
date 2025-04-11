import React, { useEffect } from 'react';
import { Card, Cards, FeatureComponent } from '@/components/landingPage.js/feature';

const Features = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.card, .hero-content, .hero-image');

            elements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const screenHeight = window.innerHeight / 1.3;

                if (elementTop < screenHeight) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <FeatureComponent>
            <h2>Fitur Unggulan untuk Bisnis yang Lebih Efisien</h2>
            <Cards>
                <Card>
                    <h3>Pembayaran & Transaksi Online</h3>
                    <p>
                        Integrasi dengan berbagai metode pembayaran (e-wallet, transfer bank, kartu kredit) & Histori transaksi otomatis tercatat.
                    </p>
                </Card>
                <Card>
                    <h3>Manajemen Stok & Inventaris</h3>
                    <p>
                        Pantau stok produk secara real-time & Notifikasi jika stok hampir habis.
                    </p>
                </Card>
                <Card>
                    <h3>Multi-User & Hak Akses</h3>
                    <p>
                        Berikan akses ke tim dengan level otorisasi berbeda & Keamanan data tetap terjaga.
                    </p>
                </Card>
                <Card>
                    <h3>Laporan Keuangan Otomatis</h3>
                    <p>
                        Grafik analisis pemasukan & pengeluaran & Export laporan ke PDF/Excel untuk akuntansi.
                    </p>
                </Card>
                <Card>
                    <h3>Pemasaran & Promosi</h3>
                    <p>
                        Fitur diskon & kupon untuk menarik pelanggan & Integrasi dengan media sosial untuk promosi.
                    </p>
                </Card>
                <Card>
                    <h3>Dashboard Interaktif</h3>
                    <p>
                        Visualisasi data bisnis yang memudahkan analisis kinerja usaha.
                    </p>
                </Card>
            </Cards>
        </FeatureComponent>
    );
};

export default Features;
