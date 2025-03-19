import { Budget, Button, Card, CardsContainer, CloseButton, CloseButtonContainer, Container, CountDown, CountDownBox, CountDownOverlay, PricingContainer } from '@/components/landingPage.js/pricing'
import React, { useEffect, useState } from 'react'
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
    const [closeCountDown, setCloseCountDown] = useState(false)
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const targetDate = new Date('2025-06-20T23:59:59').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days < 10 ? '0' + days : days.toString(),
                hours: hours < 10 ? '0' + hours : hours.toString(),
                minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
                seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <PricingContainer>
            <CountDownOverlay close={closeCountDown}>
                <CountDownBox>
                    <CloseButtonContainer>
                        <CloseButton onClick={() => setCloseCountDown(true)}>&times;</CloseButton>
                    </CloseButtonContainer>
                    <h3>Launching Dalam:</h3>
                    <CountDown>
                        <span id="days">{timeLeft.days}</span> Hari :
                        <span id="hours">{timeLeft.hours}</span> Jam :
                        <span id="minutes">{timeLeft.minutes}</span> Menit :
                        <span id="seconds">{timeLeft.seconds}</span> Detik
                    </CountDown>
                </CountDownBox>
            </CountDownOverlay>
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
