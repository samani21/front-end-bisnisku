import { Card, Feature, Header, HeaderContainer, HomeContainer, Logo, PricingCards } from '@/components/Theme/Service1/Home'
import React from 'react'

const Home = (props) => {
    const { data } = props
    return (
        <HomeContainer>
            <HeaderContainer>
                <Logo src={data?.logo} />
            </HeaderContainer>
            <Header>
                <h1>Paket Harga Profesional</h1>
                <p>Pilih paket terbaik yang sesuai dengan kebutuhan bisnis digital Anda.</p>
            </Header>
            <PricingCards>
                <Card>
                    <h3>Paket Starter</h3>
                    <p class="desc">Cocok untuk UKM pemula atau usaha rumahan yang ingin tampil online.</p>
                    <p>Rp 1.5jt</p>
                    <Feature>
                        <li>1 Halaman landing page (profil usaha / produk)</li>
                        <li>Desain modern & responsif (Next JS)</li>
                        <li>Kontak WA langsung</li>
                        <li>Gratis konsultasi domain & hosting</li>
                        <li>Tanpa backend, langsung terhubung ke WhatsApp atau email</li>
                    </Feature>
                </Card>
                <Card className='popular'>
                    <h3>Paket Bisnis </h3>
                    <p class="desc">Untuk usaha yang butuh kontrol data (CMS ringan).</p>
                    <p>Rp 3jt</p>
                    <Feature>
                        <li>3–5 Halaman: Profil, Produk, Galeri, Kontak</li>
                        <li>Frontend pakai Next.js (SEO friendly)</li>
                        <li>Backend Laravel/CI4: Admin CRUD Produk/Artikel</li>
                        <li>Form interaktif untuk pemesanan langsung via WhatsApp/email
                            (Pengunjung bisa mengisi nama, produk yang diminati, dan pesan langsung terkirim)</li>
                        <li>Integrasi WhatsApp, Google Maps</li>
                    </Feature>
                </Card>
                <Card>
                    <h3>Paket Profesional</h3>
                    <p class="desc">Untuk brand yang ingin tampil serius dan scalable</p>
                    <p>Rp 5jt - 8jt</p>
                    <Feature>
                        <li>Halaman dinamis (10+ halaman)</li>
                        <li>Backend lengkap dengan manajemen user, produk, transaksi</li>
                        <li>Frontend pakai Next.js (SSG/SSR untuk performa & SEO)</li>
                        <li>Dashboard admin responsif</li>
                        <li>Fitur tambahan: Upload gambar, export laporan, multi-role login</li>
                        <li>Bisa custom sesuai kebutuhan usaha</li>
                    </Feature>
                </Card>
                <Card>
                    <h3>Paket E-Commerce Sederhana</h3>
                    <p class="desc">Solusi toko online lengkap untuk usaha yang ingin mulai jualan secara digital.</p>
                    <p>Rp 6jt</p>
                    <Feature>
                        <li>Toko online dengan fitur keranjang belanja, checkout, dan manajemen produk</li>
                        <li>Frontend modern menggunakan <b>React.js</b> + <b>Next.js</b> untuk performa & tampilan profesional</li>
                        <li>Backend kuat dengan <b>Laravel</b> untuk mengelola data secara efisien</li>
                        <li>Sistem pembayaran <b>manual</b> via transfer bank + konfirmasi bukti bayar</li>
                        <li>Dashboard admin: kelola produk, pesanan, pelanggan, dan laporan penjualan</li>
                    </Feature>
                </Card>
                <Card>
                    <h3>Paket E-Commerce Sederhana</h3>
                    <p class="desc">Untuk bisnis yang butuh aplikasi web khusus & kompleks, disesuaikan 100% dengan alur kerja usaha.</p>
                    <p>Rp 8jt - 15jt</p>
                    <Feature>
                        <li>Sistem web bisa disesuaikan seperti: <b>POS (kasir), manajemen stok, reservasi online, kepegawaian</b>, dll</li>
                        <li>Frontend menggunakan<b> React / Next.js</b> untuk antarmuka yang cepat & responsif</li>
                        <li>Backend Laravel dengan <b>API RESTful</b>, siap diintegrasikan ke berbagai platform</li>
                        <li>Fitur lengkap seperti: <b>multi-role login</b>, cetak & export <b>laporan PDF/Excel</b>, validasi data</li>
                        <li>Termasuk <b>maintenance & support 1–3</b> bulan setelah selesai pengerjaan</li>
                    </Feature>
                </Card>
            </PricingCards>
        </HomeContainer>
    )
}

export default Home
