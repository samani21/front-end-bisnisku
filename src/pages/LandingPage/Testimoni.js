import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { CardTestimoni, Comment, Container, Content, ContentTestimoni, HeaderTester, IconLogo, ImageTester, NameToko, Stars, SubTitle, TestimonialCard, Testimonials, TestimoniContainer, Title } from '@/components/landingPage.js/testimoni';
const testimonials = [
    { name: "Toko Sukses Jaya", comment: "Aplikasi ini sangat membantu dalam mencatat pemasukan dan pengeluaran bisnis saya!", rating: 3 },
    { name: "Warung Sejahtera", comment: "Dashboard interaktifnya sangat mudah digunakan dan informatif.", rating: 5 },
    { name: "FashionHub", comment: "Saya bisa mengelola stok barang dengan lebih rapi dan efisien.", rating: 2 },
    { name: "Resto Lezat", comment: "Fitur laporan keuangannya sangat membantu saya dalam mengambil keputusan bisnis.", rating: 5 },
    { name: "Gadget Store", comment: "Integrasi dengan pembayaran online memudahkan transaksi pelanggan.", rating: 4 },
    { name: "Mart Murah", comment: "Sangat intuitif, bahkan bagi pemula seperti saya!", rating: 1 },
    { name: "Coffee Corner", comment: "Aplikasi ini membantu saya memahami tren penjualan dengan lebih baik.", rating: 5 },
    { name: "Rumah Kue", comment: "Sekarang saya bisa melacak semua transaksi dalam satu tempat.", rating: 4 },
    { name: "Sporty Shop", comment: "Desain UI/UX-nya sangat nyaman dipakai sehari-hari.", rating: 5 },
    { name: "Sentra Hijab", comment: "Export laporan keuangan dalam bentuk PDF sangat praktis!", rating: 2 },
    { name: "Distro Kreatif", comment: "Fitur katalog produk memudahkan pelanggan melihat barang yang saya jual.", rating: 5 },
    { name: "Fresh Market", comment: "Saya suka notifikasi stok barang yang hampir habis.", rating: 4 },
    { name: "Toko Mainan Ceria", comment: "Fitur multi-user sangat membantu dalam pembagian tugas tim saya.", rating: 3 },
    { name: "Aksesoris Cantik", comment: "Sekarang saya bisa melihat performa bisnis saya secara real-time.", rating: 5 },
    { name: "Bengkel Motor", comment: "Sistem pencatatan transaksi sangat detail dan rapi.", rating: 4 },
    { name: "Elektronik Center", comment: "Sangat direkomendasikan untuk UMKM yang ingin berkembang!", rating: 5 },
    { name: "Toko Herbal Sehat", comment: "Aplikasi ini membuat manajemen keuangan jadi lebih simpel.", rating: 5 },
    { name: "Butik Elegan", comment: "Saya bisa lebih fokus ke bisnis karena semua sudah otomatis.", rating: 3 },
    { name: "Kios Sayur Segar", comment: "Pengeluaran harian lebih terkontrol sejak pakai aplikasi ini.", rating: 5 },
    { name: "Restoran Nusantara", comment: "Saya bisa memantau laporan keuangan dari mana saja!", rating: 5 },
    { name: "Snack House", comment: "Fitur e-commerce sangat mempermudah pemasaran produk.", rating: 4 },
    { name: "Toko Tas Modis", comment: "User-friendly dan cocok untuk pemula!", rating: 5 },
    { name: "Depot Air Minum", comment: "Sistem notifikasi sangat membantu dalam pengelolaan stok.", rating: 4 },
    { name: "Car Wash Bersih", comment: "Sangat membantu dalam melihat tren pemasukan harian.", rating: 5 },
    { name: "Salon Cantik", comment: "Saya jadi lebih mudah mengatur keuangan bisnis saya.", rating: 2 },
    { name: "Laundry Express", comment: "Tampilan dashboardnya modern dan mudah dimengerti.", rating: 4 },
    { name: "Bakery Delights", comment: "Aplikasi ini meningkatkan efisiensi operasional toko saya.", rating: 5 },
    { name: "Sablon Kreatif", comment: "Saya suka fitur analisis keuangan yang disediakan.", rating: 4 },
    { name: "Toko Perabot", comment: "Memudahkan pencatatan transaksi harian.", rating: 5 },
    { name: "Warung Ibu Ani", comment: "Aplikasi ini membantu saya menghemat waktu dalam mengelola bisnis.", rating: 5 },
    { name: "Batik Asli", comment: "Fitur laporan mingguan sangat bermanfaat!", rating: 4 },
    { name: "Food Truck Enak", comment: "Sistem pembayaran digital sangat memudahkan transaksi pelanggan.", rating: 5 },
    { name: "Toko Alat Tulis", comment: "Sekarang saya lebih paham arus kas bisnis saya.", rating: 5 },
    { name: "Pet Shop Happy", comment: "Sangat cocok untuk bisnis retail seperti saya.", rating: 4 },
    { name: "Toko Helm Motor", comment: "Dashboard sangat informatif dan mudah digunakan.", rating: 5 },
    { name: "Agen Sembako", comment: "Fitur reminder untuk pembayaran hutang sangat membantu!", rating: 5 },
    { name: "Toko Sepatu Branded", comment: "Tampilan katalog produk sangat menarik bagi pelanggan.", rating: 4 },
    { name: "Café Kopi Senja", comment: "Saya lebih mudah mengontrol pemasukan harian.", rating: 5 },
    { name: "Bengkel Mobil Aman", comment: "Keamanan data sangat baik, tidak perlu khawatir kehilangan data.", rating: 5 },
    { name: "Toko Oleh-Oleh", comment: "Sistem multi-cabang sangat membantu bagi bisnis saya yang punya beberapa toko.", rating: 4 },
    { name: "Mini Market Berkah", comment: "Bisa diakses dari mana saja, sangat fleksibel!", rating: 5 },
    { name: "Grosir Pakaian Murah", comment: "Fitur laporan bulanan sangat akurat.", rating: 5 },
    { name: "Kedai Jus Segar", comment: "User-friendly, saya tidak butuh waktu lama untuk memahami aplikasinya.", rating: 4 },
    { name: "Bunga Indah Florist", comment: "Sangat membantu dalam mencatat pemasukan dan pengeluaran.", rating: 5 },
    { name: "Jasa Printing Cepat", comment: "Integrasi e-commerce sangat memudahkan pelanggan memesan produk.", rating: 5 },
    { name: "Toko Pancing", comment: "Sangat direkomendasikan untuk semua pemilik usaha kecil.", rating: 4 },
    { name: "Rental Mobil Murah", comment: "Saya bisa lebih fokus mengembangkan bisnis tanpa ribet dengan pencatatan manual.", rating: 5 }
];
const Testimoni = () => {
    const contentRef = useRef(null);
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);
    const [isManualScrolling, setIsManualScrolling] = useState(false);

    useEffect(() => {
        const handleUserScroll = () => {
            setIsManualScrolling(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setIsManualScrolling(false);
            }, 3000);
        };

        const contentEl = contentRef.current;
        if (contentEl) {
            contentEl.addEventListener('scroll', handleUserScroll);
        }

        const startAutoScroll = () => {
            intervalRef.current = setInterval(() => {
                if (contentRef.current && !isManualScrolling) {
                    contentRef.current.scrollBy({ left: 220, behavior: 'smooth' });
                    if (contentRef.current.scrollLeft + contentRef.current.clientWidth >= contentRef.current.scrollWidth) {
                        contentRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                }
            }, 3000);
        };

        startAutoScroll();

        return () => {
            clearInterval(intervalRef.current);
            if (contentEl) {
                contentEl.removeEventListener('scroll', handleUserScroll);
            }
        };
    }, [isManualScrolling]);
    return (
        <TestimoniContainer>
            <Container>
                <h2>Cerita Sukses Bersama Kami</h2>
                <p class="subtitle">Dari bisnis kecil hingga perusahaan berkembang, aplikasi kami telah membantu mereka mencapai lebih banyak.</p>
            </Container>
            <Testimonials ref={contentRef}>
                {testimonials?.map((item, index) => {
                    return (
                        <TestimonialCard key={index}>
                            <IconLogo src={`https://cdn-icons-png.flaticon.com/512/1076/10769${index + 1 > 9 ? index + 1 : `0${index + 1}`}.png`} />
                            <Stars>
                                {
                                    item?.rating == 1 ? '★' :
                                        item?.rating == 2 ? '★★' :
                                            item?.rating == 3 ? '★★★' :
                                                item?.rating == 4 ? '★★★★' :
                                                    item?.rating == 5 ? '★★★★★' : ""

                                }
                            </Stars>
                            <h3>{item?.name}</h3>
                            <p>{item?.comment}</p>
                        </TestimonialCard>
                    );
                })}
            </Testimonials>
        </TestimoniContainer>
    );
};

export default Testimoni;