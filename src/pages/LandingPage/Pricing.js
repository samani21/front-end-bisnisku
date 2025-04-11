import { ButtonCTA, ButtonOpenModal, CountDownBanner, CountDownTimer, Features, Plan, Plans, Price, PricingComponent, Time } from '@/components/landingPage.js/pricing'
import React, { useEffect, useState } from 'react'
import PricingModal from './PricingModal';
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
        <PricingComponent>
            <h2>Simple, Transparent Pricing</h2>
            <CountDownBanner>
                <p>Special offer ends in:</p>
                <CountDownTimer>
                    <Time>
                        <span id="days">{timeLeft.days}</span>
                        <p>Hari</p>
                    </Time>
                    <Time>
                        <span id="hours">{timeLeft.hours}</span>
                        <p>Jam</p>
                    </Time>
                    <Time>
                        <span id="minutes">{timeLeft.minutes}</span>
                        <p>Menit</p>
                    </Time>
                    <Time>
                        <span id="seconds">{timeLeft.seconds}</span>
                        <p>Detik</p>
                    </Time>
                </CountDownTimer>
                <ButtonOpenModal onClick={() => setCloseCountDown(true)}>See Details</ButtonOpenModal>
            </CountDownBanner>

            <Plans>
                <Plan>
                    <h3>Gratis</h3>
                    <Price>Rp.0<span class="price-period">/bulan</span></Price>
                    <Features>
                        <li><span>✓</span>Pencatatan basic</li>
                        <li><span>✓</span>Dashboard sederhana</li>
                        <li><span>✓</span>Stok terbatas</li>
                        <li><span>✓</span>Support email</li>
                    </Features>
                    <ButtonCTA>Get Started</ButtonCTA>
                </Plan>
                <Plan>
                    <h3>Basic</h3>
                    <Price>Rp.49<span class="price-period">/bulan</span></Price>
                    <Features>
                        <li><span>✓</span>Pencatatan lengkap</li>
                        <li><span>✓</span>Dashboard analitik</li>
                        <li><span>✓</span>Manajemen stok</li>
                        <li><span>✓</span>Email support</li>
                    </Features>
                    <ButtonCTA>Get Started</ButtonCTA>
                </Plan>
                <Plan className='recommended'>
                    <h3>Populer</h3>
                    <Price>Rp.74<span class="price-period">/bulan</span></Price>
                    <Features>
                        <li><span>✓</span>Semua fitur Basic</li>
                        <li><span>✓</span>Export ke Excel/PDF</li>
                        <li><span>✓</span>Analisa keuangan</li>
                        <li><span>✓</span>Priority Support</li>
                    </Features>
                    <ButtonCTA>Get Started</ButtonCTA>
                </Plan>
                <Plan>
                    <h3>Enterprise</h3>
                    <Price>Rp.99<span class="price-period">/bulan</span></Price>
                    <Features>
                        <li><span>✓</span>Semua fitur Pro</li>
                        <li><span>✓</span>Integrasi e-commerce</li>
                        <li><span>✓</span>Multi cabang & user</li>
                        <li><span>✓</span>24/7 Dedicated Support</li>
                    </Features>
                    <ButtonCTA>Get Started</ButtonCTA>
                </Plan>

            </Plans>
            {
                closeCountDown &&
                <PricingModal setCloseCountDown={setCloseCountDown} />
            }
        </PricingComponent>
    )
}

export default Pricing
