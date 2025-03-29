import { Amount, ButtonBack, ButtonCheck, Header, HeaderList, IconArrowLeft, IconSvg, Items, List, ListBills, ListContainer, PaymentContainer, TitleHeader } from '@/components/Payment'
import React, { useEffect, useState } from 'react'

const Payment = () => {
    const [item, setItem] = useState();
    const [toko, setToko] = useState();
    const [demo, setDemo] = useState(false);
    const totalHarga = item?.reduce((total, item) => total + item.price * item.qty, 0);

    useEffect(() => {
        setItem(JSON.parse(localStorage.getItem('pesananDemo')))
        setToko(JSON.parse(localStorage.getItem('tokoDemo')))
        // setItem()
    }, [])
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            minimumFractionDigits: 0
        }).format(angka);
    };
    const payementDemo = () => {
        if (!demo) {
            setDemo(true)
        } else {
            if (item && toko) {
                let existingPesanan = localStorage.getItem('Payment');

                // Jika data ada, parse menjadi array, jika tidak, buat array kosong
                existingPesanan = existingPesanan ? JSON.parse(existingPesanan) : [];
                const pembayaranBaru = {
                    nama: toko?.nama,
                    logo: toko?.logo,
                    item: item
                };
                existingPesanan?.push(pembayaranBaru);

                // Simpan kembali ke localStorage
                localStorage.setItem('Payment', JSON.stringify(existingPesanan));
                localStorage.removeItem('pesananDemo')
                localStorage.removeItem('tokoDemo')
                setItem()
                setToko()
            }
        }
    }
    return (
        <PaymentContainer>
            <Header>
                <IconArrowLeft src='/icon/arrowleft.svg' />
                <TitleHeader>Bill Details</TitleHeader>
                <IconArrowLeft src='/icon/menu-dots.svg' />
            </Header>
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
            <ButtonCheck onClick={payementDemo}>
                Cek Pembayaran
            </ButtonCheck>
            <ButtonBack>
                Kembali
            </ButtonBack>
        </PaymentContainer>
    )
}

export default Payment
