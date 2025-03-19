import { Budget, Button, Card, CardsContainer, Container, PricingContainer } from '@/components/landingPage.js/pricing'
import React from 'react'
const pricingPlans = [
    {
        name: "Gratis",
        price: 0,
        features: [
            "Pencatatan pemasukan & pengeluaran terbatas",
            "Dashboard dasar",
            "Manajemen stok sederhana",
            "Support via email (terbatas)"
        ],
        recommended: false
    },
    {
        name: "Basic",
        price: 49999,
        features: [
            "Pencatatan pemasukan & pengeluaran",
            "Dashboard dasar",
            "Manajemen stok sederhana",
            "Support via email"
        ],
        recommended: false
    },
    {
        name: "Pro",
        price: 74999,
        features: [
            "Semua fitur Basic",
            "Analisis keuangan lanjutan",
            "Laporan keuangan otomatis",
            "Support prioritas via chat & email",
            "Export data ke Excel/PDF"
        ],
        recommended: "Bisnis Berkembang" // Paket ini direkomendasikan untuk bisnis berkembang

    },
    {
        name: "Premium",
        price: 99999,
        features: [
            "Semua fitur Pro",
            "Integrasi e-commerce",
            "Notifikasi stok & transaksi",
            "Multi-user & multi-cabang",
            "Support 24/7 via chat & call"
        ],
        recommended: "Bisnis Skala Besar" // Paket ini direkomendasikan untuk bisnis skala besar
    }
];


const Pricing = () => {
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
    };
    return (
        <PricingContainer>
            <Container>
                <h1>Paket Harga yang Fleksibel</h1>
                <p>Sesuaikan kebutuhan bisnis kamu dengan paket yang kami sediakan. Didesain untuk UKM hingga skala besar.</p>
                <CardsContainer>
                    <Card>
                        <h2>Gratis</h2>
                        <div class="price">Rp 0 <small>/bulan</small></div>
                        <Button>Get Started</Button>
                        <ul>
                            <li>Pencatatan basic</li>
                            <li>Dashboard sederhana</li>
                            <li>Stok terbatas</li>
                            <li>Support email</li>
                        </ul>
                    </Card>

                    <Card>
                        <h2>Basic</h2>
                        <div class="price">Rp 49K <small>/bulan</small></div>
                        <Button>Pilih Paket</Button>
                        <ul>
                            <li>Pencatatan lengkap</li>
                            <li>Dashboard analitik</li>
                            <li>Manajemen stok</li>
                            <li>Email support</li>
                        </ul>
                    </Card>

                    <Card>
                        <Budget>Populer</Budget>
                        <h2>Pro</h2>
                        <div class="price">Rp 74K <small>/bulan</small></div>
                        <Button>Pilih Paket</Button>
                        <ul>
                            <li>Semua fitur Basic</li>
                            <li>Export ke Excel/PDF</li>
                            <li>Analisa keuangan</li>
                            <li>Priority Support</li>
                        </ul>
                    </Card>

                    <Card>
                        <Budget>Enterprise</Budget>
                        <h2>Premium</h2>
                        <div class="price">Rp 99K <small>/bulan</small></div>
                        <Button>Pilih Paket</Button>
                        <ul>
                            <li>Semua fitur Pro</li>
                            <li>Integrasi e-commerce</li>
                            <li>Multi cabang & user</li>
                            <li>24/7 Dedicated Support</li>
                        </ul>
                    </Card>
                </CardsContainer>
            </Container>
        </PricingContainer>
    )
}

export default Pricing
