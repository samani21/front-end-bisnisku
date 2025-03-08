import { ButtonLangganan, CardPricing, CardPricingContainer, Content, DetailPrice, Feature, IconCeklist, ListFeature, PricingContainer, Rekomendasi, SubTitle, SubtitlePrice, Title, TitleFeature, TitlePrice, TotalPrice } from '@/components/landingPage.js/pricing'
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
            <Title>
                Pilih Paket yang Sesuai dengan Bisnismu
            </Title>
            <SubTitle>Dapatkan fitur terbaik untuk mengelola bisnis Anda dengan harga yang sesuai. Mulai dari pencatatan keuangan hingga integrasi e-commerce!</SubTitle>
            <Content>
                {
                    pricingPlans?.map((item, index) => (
                        <CardPricingContainer key={index}>
                            <CardPricing>
                                {
                                    item?.recommended &&
                                    <Rekomendasi>
                                        {item?.recommended}
                                    </Rekomendasi>
                                }
                                <DetailPrice rekomendasi={item?.recommended ? true : false}>
                                    <div>
                                        <TitlePrice>
                                            {item?.name}
                                        </TitlePrice>
                                        <SubtitlePrice>
                                            Mulai dari
                                        </SubtitlePrice>
                                    </div>
                                    <TotalPrice>
                                        {formatRupiah(item?.price)}/<span>bulan</span>
                                    </TotalPrice>
                                </DetailPrice>
                                <ButtonLangganan>
                                    Berlanganan
                                </ButtonLangganan>
                                <ListFeature>
                                    {
                                        item?.features?.map((f, i) => (
                                            <Feature key={i}>
                                                <IconCeklist src='./icon/check-circle.png' />
                                                <TitleFeature>{f}</TitleFeature>
                                            </Feature>
                                        ))
                                    }
                                </ListFeature>
                            </CardPricing>
                        </CardPricingContainer>
                    ))
                }
            </Content>
        </PricingContainer>
    )
}

export default Pricing
