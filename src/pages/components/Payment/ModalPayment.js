import React from 'react'
import { AmountContainer, ButtonCLose, CodeTransaksi, Content, Copy, Detail, DetailContainr, IconCheck, IconCheckContainer, Item, ListItem, ListItemContainer, PayementContainer, Qty, Title, Total, TotalContainer, TotalPrice, TypographCenter, TypographLeft, TypographRight } from '@/components/ModalPayment'

const ModalPayment = (props) => {
    const { payment, setOpenPayment } = props;
    const formatRupiah = (number) => {
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
    const handleCopy = () => {
        navigator.clipboard.writeText(payment?.kode_transaksi);
    };
    return (
        <PayementContainer>
            <Title>
                Detail Pembayaran
            </Title>
            <Content>
                <IconCheckContainer>
                    <IconCheck src='/icon/chcklist-green.svg' />
                </IconCheckContainer>
                <AmountContainer>
                    Amount
                    <TotalPrice>
                        {formatRupiah(payment?.total)}
                    </TotalPrice>
                </AmountContainer>
                <DetailContainr>
                    <Detail>
                        <TypographLeft>Nama Tempat</TypographLeft>
                        <TypographRight>{payment?.nama_usaha}</TypographRight>
                    </Detail>
                    <Detail>
                        <TypographLeft>Jenis</TypographLeft>
                        <TypographRight>Pembayaran</TypographRight>
                    </Detail>
                    <Detail>
                        <TypographLeft>Tanggal</TypographLeft>
                        <TypographRight>
                            {/* <FormatTanggal date={payment?.tanggal} /> */}
                        </TypographRight>
                    </Detail>
                </DetailContainr>
                <ListItemContainer>
                    {
                        payment?.item?.map((item, i) => (
                            <ListItem key={i}>
                                <Item>
                                    {item?.item}
                                    <TotalContainer>
                                        <Qty>{item?.qty}X  {item?.size} ({item?.type})</Qty>
                                        <Total>{formatRupiah(item?.price)}</Total>
                                    </TotalContainer>
                                </Item>
                            </ListItem>
                        ))
                    }
                </ListItemContainer>
                <CodeTransaksi>
                    <TypographCenter>
                        {payment?.kode_transaksi}
                    </TypographCenter>
                    <Copy src='/icon/copy.svg' onClick={handleCopy} />
                </CodeTransaksi>
            </Content>
            <ButtonCLose onClick={() => setOpenPayment()}>Close</ButtonCLose>
        </PayementContainer>
    )
}

export default ModalPayment
