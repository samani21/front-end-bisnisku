import React, { useState } from 'react'
import Home from './Home'
import Head from 'next/head'
import Navbar from './Navbar'
import Payment from '@/pages/components/Payment'
import About from '../../food-drink/Food1/About'

const detailTheme = {
    nama: "Syntax Project",
    logo: "/icon/logo-syntax.png",
    color_primary: "#ff660e",
    color_secondary: "#f4fbf6",
    email: "eksloba21@gmail.com",
    url: "https://front-end-bisnisku-tqk1.vercel.app/syntax-project",
    pos: 70247,
    address: "Jl.Gerilya Peradapan",
    provinsi: "Kalimantan Selatan",
    time_start: "08:00:00",
    time_end: "22:59:59",
    tiktok: "Belum ada",
    instagram: "syntax_project",
    facebook: "belum ada",
    phone: "081254130919",
}
const Theme1 = () => {
    const [viewPage, setViewPage] = useState('Home');
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </Head>
            {
                viewPage === 'Home' ?
                    <Home data={detailTheme} /> :
                    viewPage === 'Chat' ?
                        "asas" :
                        viewPage === 'History' ?
                            <Payment data={detailTheme} /> :
                            <About data={detailTheme} />
            }
            <Navbar viewPage={viewPage} setViewPage={setViewPage} />
        </div>
    )
}

export default Theme1
