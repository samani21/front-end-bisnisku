import { ButtonPesan, Content, ContentContainer, HargaProduct, HeaderContent, IconBack, IconContainer, IconPlusMinus, ListTipe, ModalContainer, NameProduct, PesananContainer, Tipe, TipeContainer, Total, TotalContainer } from '@/components/Theme/Food1/Modal'
import React, { useEffect, useState } from 'react'

// Fungsi untuk menentukan apakah warna terang atau gelap
const isLightColor = (hex) => {
    if (!hex) return true; // Default terang jika tidak ada warna
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Menggunakan luminance formula untuk menentukan kecerahan
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128; // Jika lebih dari 128, anggap warna terang
};

const Modal = (props) => {
    const { data, setOpenModal, detailTheme } = props;
    const [tipeActive, setTipeActive] = useState();
    const [ukuranActive, setUkuranActive] = useState();
    const [tipeError, setTipeError] = useState(false);
    const [ukuranError, setUkuranError] = useState(false);
    const [totalPesanan, setTotalPesanan] = useState(1);
    const isLight = isLightColor(detailTheme?.color_secondary);
    const textColor = isLight ? '#000' : '#fff'; // Hitam untuk warna terang, putih untuk warna gelap
    const isLightActive = isLightColor(detailTheme?.color_primary);
    const textColorActive = isLightActive ? '#000' : '#fff';

    const kurangPesanan = () => {
        if (totalPesanan > 1) {
            setTotalPesanan(totalPesanan - 1)
        }
    }
    const onPesan = () => {
        if (tipeActive && ukuranActive) {
            // Ambil data pesanan yang sudah ada di localStorage dan pastikan dalam bentuk array
            let existingPesanan = localStorage.getItem('pesananDemo');
            existingPesanan = existingPesanan ? JSON.parse(existingPesanan) : [];

            // Pastikan existingPesanan adalah array
            if (!Array.isArray(existingPesanan)) {
                existingPesanan = [];
            }

            // Buat pesanan baru
            const pesananBaru = {
                item: data?.nama,
                type: tipeActive,
                size: ukuranActive,
                qty: totalPesanan,
                price: data?.harga
            };

            // Cek apakah pesanan dengan item, type, dan size yang sama sudah ada
            const existingIndex = existingPesanan.findIndex(p =>
                p.item === pesananBaru.item &&
                p.type === pesananBaru.type &&
                p.size === pesananBaru.size
            );

            if (existingIndex !== -1) {
                // Jika ada, tambahkan qty
                existingPesanan[existingIndex].qty += pesananBaru.qty;
            } else {
                // Jika tidak ada, tambahkan sebagai pesanan baru
                existingPesanan.push(pesananBaru);
            }

            // Simpan kembali ke localStorage
            localStorage.setItem('pesananDemo', JSON.stringify(existingPesanan));
            localStorage.setItem('tokoDemo', JSON.stringify(detailTheme));
        } else {
            if (!tipeActive) {
                setTipeError(true)
                setUkuranError(true)
            }
            if (!ukuranActive) {
                setUkuranError(true)
            }
        }
    };

    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
    };
    useEffect(() => {
        document.body.scroll = "hidden"
    }, [])
    return (
        <ModalContainer>
            <ContentContainer>
                <HeaderContent image={data?.image}>
                    <IconContainer onClick={() => setOpenModal()} >
                        <IconBack src='/icon/back.svg' />
                    </IconContainer>
                </HeaderContent>
                <Content>
                    <NameProduct color={detailTheme?.color_primary} textColor={textColor}>
                        {data?.nama}
                    </NameProduct>
                    <HargaProduct color={detailTheme?.color_primary} textColor={textColor}>
                        {formatRupiah(data?.harga)}
                    </HargaProduct>
                    <TipeContainer>
                        <p>Tipe </p>
                        <ListTipe>
                            {data?.jenis?.map((t, i) => (
                                <Tipe key={i} color={detailTheme?.color_secondary} colorActive={detailTheme?.color_primary} textColor={tipeActive === t ? textColorActive : textColor} className={tipeActive === t ? "active" : ""} onClick={() => {
                                    setTipeActive(t)
                                    setTipeError(false)
                                }}>
                                    {t}
                                </Tipe>
                            ))}
                        </ListTipe>
                        {
                            tipeError && <p className='error'>Harap pilih tipe</p>
                        }
                    </TipeContainer>
                    <TipeContainer>
                        <p>Ukuran </p>
                        <ListTipe>
                            {data?.ukuran?.map((u, i) => (
                                <Tipe key={i} color={detailTheme?.color_secondary} colorActive={detailTheme?.color_primary} textColor={ukuranActive === u ? textColorActive : textColor} className={ukuranActive === u ? "active" : ""} onClick={() => {
                                    setUkuranActive(u)
                                    setUkuranError(false)
                                }}>
                                    {u}
                                </Tipe>
                            ))}
                        </ListTipe>
                        {
                            ukuranError && <p className='error'>Harap pilih ukuran</p>
                        }
                    </TipeContainer>
                    <PesananContainer>
                        <p>Pesanan</p>
                        <div className='content'>
                            <IconPlusMinus src='/icon/minus.svg' onClick={kurangPesanan} />
                            <Total color={detailTheme?.color_secondary}>
                                {totalPesanan}
                            </Total>
                            <IconPlusMinus src='/icon/plus.svg' onClick={() => setTotalPesanan(totalPesanan + 1)} />
                        </div>
                    </PesananContainer>
                    <ButtonPesan color={detailTheme?.color_secondary} textColor={textColor} onClick={onPesan}>
                        Tambah
                    </ButtonPesan>
                    <TotalContainer>
                        <p>Total Pesanan</p>
                        <div className='content'>
                            {formatRupiah(data?.harga * totalPesanan)}
                        </div>
                    </TotalContainer>
                    <ButtonPesan color={detailTheme?.color_primary} textColor={textColorActive} onClick={onPesan}>
                        Pesan
                    </ButtonPesan>
                </Content>
            </ContentContainer>
        </ModalContainer>
    );
}

export default Modal;
