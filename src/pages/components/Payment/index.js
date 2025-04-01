import { Amount, ButtonBack, ButtonCheck, CardTransaksi, Content, Details, Header, HeaderList, IconArrowLeft, InputSearch, Items, List, ListBills, ListContainer, ListContent, LogoBisnis, Menu, MenuContainer, NameBisnis, PaymentContainer, Search, SearchContainer, Tanggal, TitleHeader, TitleTransaksi, Total } from '@/components/Payment'
import React, { useEffect, useState } from 'react'
import ModalPayment from './ModalPayment';
import Loading from '@/components/Loading';
const menus = [
    'Riwayat',
    'Pembayaran'
]
// const history = [
//     {
//         "kode_transaksi": "TRX-20250310-001",
//         "nama_usaha": "Warung Sederhana",
//         "tanggal": "2025-03-10",
//         "total_pembayaran": 150000,
//         "items": [
//             { "nama": "Nasi Goreng Spesial", "kategori": "Makanan", "harga": 35000, "qty": 2, "ukuran": "Besar", "type": "Makanan Berat" },
//             { "nama": "Es Teh Manis", "kategori": "Minuman", "harga": 5000, "qty": 1, "ukuran": "Sedang", "type": "Dingin" },
//             { "nama": "Paket Hemat Ayam Geprek", "kategori": "Paket Hemat & Menu Spesial", "harga": 30000, "qty": 1, "ukuran": "Besar", "type": "Makanan Berat" }
//         ]
//     },
//     {
//         "kode_transaksi": "TRX-20250311-002",
//         "nama_usaha": "Kedai Kopi Mantap",
//         "tanggal": "2025-03-11",
//         "total_pembayaran": 85000,
//         "items": [
//             { "nama": "Kopi Susu", "kategori": "Minuman", "harga": 25000, "qty": 1, "ukuran": "Sedang", "type": "Kopi" },
//             { "nama": "Cheesecake", "kategori": "Dessert & Jajanan Manis", "harga": 30000, "qty": 1, "ukuran": "Kecil", "type": "Manis" },
//             { "nama": "Granola Bowl", "kategori": "Makanan Sehat", "harga": 30000, "qty": 1, "ukuran": "Sedang", "type": "Sehat" }
//         ]
//     },
//     {
//         "kode_transaksi": "TRX-20250312-003",
//         "nama_usaha": "Roti & Kue Enak",
//         "tanggal": "2025-03-12",
//         "total_pembayaran": 75000,
//         "items": [
//             { "nama": "Tiramisu Cake", "kategori": "Dessert & Jajanan Manis", "harga": 40000, "qty": 1, "ukuran": "Sedang", "type": "Manis" },
//             { "nama": "Kopi Hitam", "kategori": "Minuman", "harga": 15000, "qty": 1, "ukuran": "Kecil", "type": "Kopi" },
//             { "nama": "Donat Coklat", "kategori": "Dessert & Jajanan Manis", "harga": 20000, "qty": 1, "ukuran": "Kecil", "type": "Manis" }
//         ]
//     },
//     {
//         "kode_transaksi": "TRX-20250313-004",
//         "nama_usaha": "Healthy Bites",
//         "tanggal": "2025-03-13",
//         "total_pembayaran": 120000,
//         "items": [
//             { "nama": "Quinoa Salad", "kategori": "Makanan Sehat", "harga": 50000, "qty": 1, "ukuran": "Sedang", "type": "Sehat" },
//             { "nama": "Jus Detox Hijau", "kategori": "Minuman", "harga": 25000, "qty": 1, "ukuran": "Sedang", "type": "Dingin" },
//             { "nama": "Oatmeal Bowl", "kategori": "Makanan Sehat", "harga": 45000, "qty": 1, "ukuran": "Sedang", "type": "Sehat" }
//         ]
//     }
// ];


const Payment = (props) => {
    const { data } = props
    const [item, setItem] = useState();
    const [toko, setToko] = useState();
    const [demo, setDemo] = useState(false);
    const [loading, setLoading] = useState(false);
    const totalHarga = item?.reduce((total, item) => total + item.price * item.qty, 0);
    const [menuActive, setMenuActive] = useState("Pembayaran")
    const [history, setHistory] = useState();
    const [openPayment, setOpenPayment] = useState();
    const [belumBayar, setBelumBayar] = useState(true)
    const handelPayment = (item) => {
        setOpenPayment(item);
    };

    const formatRupiahRp = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Tanpa desimal
        }).format(number);
    };

    function FormatTanggal({ date }) {
        const dateObj = new Date(date);

        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(dateObj);

        return (
            formattedDate
        );
    }

    useEffect(() => {
        setItem(JSON.parse(localStorage.getItem('pesananDemo')))
        setToko(JSON.parse(localStorage.getItem('tokoDemo')))
        setHistory(JSON.parse(localStorage.getItem('paymentDemo')))
        // setItem()
    }, [])
    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem('paymentDemo')))
    }, [menuActive])
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            minimumFractionDigits: 0
        }).format(angka);
    };
    const payementDemo = () => {
        if (!demo) {
            setLoading(true)
            setTimeout(() => {
                setBelumBayar(false)
                setDemo(true);
                setLoading(false);
            }, 3000); // Delay 5 detik
        } else {
            if (item && toko) {
                let existingPesanan = localStorage.getItem('paymentDemo');
                const now = new Date();
                const tanggalFormat = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
                const kodeTransaksi = `TRX${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${Math.floor(Math.random() * 1000)}`;
                // Jika data ada, parse menjadi array, jika tidak, buat array kosong
                existingPesanan = existingPesanan ? JSON.parse(existingPesanan) : [];
                const pembayaranBaru = {
                    nama: toko?.nama,
                    logo: toko?.logo,
                    item: item,
                    tanggal: tanggalFormat,
                    total: (totalHarga / 10) + totalHarga,
                    kode_transaksi: kodeTransaksi
                };
                existingPesanan?.push(pembayaranBaru);

                // Simpan kembali ke localStorage
                localStorage.setItem('paymentDemo', JSON.stringify(existingPesanan));
                localStorage.removeItem('pesananDemo')
                localStorage.removeItem('tokoDemo')
                setItem()
                setToko()
                setBelumBayar(true)
            }
        }
    }
    return (
        <PaymentContainer>
            <Content>
                <Header>
                    <TitleHeader>Transaksi</TitleHeader>
                </Header>
                {menuActive != 'Pembayaran' && <SearchContainer>
                    <Search src='/icon/search-theme-1.svg' />
                    <InputSearch placeholder='Search by name, date' />
                </SearchContainer>}
                <MenuContainer>
                    {
                        menus?.map((m, i) => (
                            <Menu key={i} className={menuActive === m ? "active" : ""} onClick={() => setMenuActive(m)}>
                                {m}
                            </Menu>
                        ))
                    }
                </MenuContainer>
                {
                    menuActive === 'Pembayaran' ?
                        <>
                            <ListBills>
                                <HeaderList>
                                    <p className='item'>Item</p>
                                    <p className='price'>Rp</p>
                                    <p className='qty'>Qty</p>
                                </HeaderList>
                                <ListContainer>
                                    {
                                        item?.map((item, i) => (
                                            <List key={i}>
                                                <Items>
                                                    <p className='item'>{item?.item}</p>
                                                    <p className='price'>{formatRupiah(item?.price * item?.qty)}</p>
                                                    <p className='qty'>{item?.qty}</p>
                                                </Items>
                                                <div className='tipe'>
                                                    {item?.type}({item?.size})
                                                </div>
                                            </List>
                                        ))
                                    }
                                </ListContainer>
                            </ListBills>
                            <Amount>
                                <div className='ppn'>
                                    <p>Total Pesanan</p>
                                    <p>Rp. {formatRupiah(totalHarga || 0)}</p>
                                </div>
                                <div className='ppn'>
                                    <p>PPN (10%)</p>
                                    <p>Rp. {formatRupiah(totalHarga / 10 || 0)}</p>
                                </div>
                                <div className='amount'>
                                    <p>Total Keseluruhan</p>
                                    <p>Rp. {formatRupiah((totalHarga / 10) + totalHarga || 0)}</p>
                                </div>
                            </Amount>
                            {
                                !belumBayar &&
                                <p style={{ fontSize: "14px", color: "red", marginTop: "10px", textAlign: "center" }}>Pembayaran belum selesai</p>
                            }
                            <ButtonCheck onClick={payementDemo}>
                                Cek Pembayaran
                            </ButtonCheck>
                            <p style={{ fontSize: "10px" }}>Klik 2 kali di cek pembayaran untek tes pembayaran</p>
                        </> :
                        <ListContent>
                            {
                                history?.map((h, i) => (
                                    <CardTransaksi key={i} onClick={() => handelPayment(h)}>
                                        <LogoBisnis src={h?.logo} />
                                        <Details>
                                            <Tanggal>
                                                <FormatTanggal date={h?.tanggal} />
                                            </Tanggal>
                                            <TitleTransaksi>Pembayaran</TitleTransaksi>
                                            <NameBisnis>{h?.nama}</NameBisnis>
                                            <Total>{formatRupiahRp(h?.total)}</Total>
                                        </Details>
                                    </CardTransaksi>
                                ))
                            }
                        </ListContent>
                }
                {
                    openPayment && <ModalPayment payment={openPayment} setOpenPayment={setOpenPayment} />
                }
            </Content>

            {
                loading && <Loading color={data?.color_primary} />
            }
        </PaymentContainer>
    )
}

export default Payment
