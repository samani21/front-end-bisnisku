import React from 'react'
import Home from './Home'
import Head from 'next/head'

const detailTheme = {
    nama: "Usahaku",
    logo: "/icon/logo-syntax.png",
    color_primary: "#ff660e",
    color_secondary: "#f4fbf6",
    email: "eksloba21@gmail.com",
    url: "https://front-end-bisnisku-tqk1.vercel.app/theme/food/theme-1",
    pos: 1234567,
    address: "Jl.Alamat no 1",
    provinsi: "Kalimantan Selatan",
    time_start: "08:01:59",
    time_end: "11:59:59",
    tiktok: "bisnisku.info",
    instagram: "bisnisku_dot_info",
    facebook: "belum ada",
    phone: "081231139012",
}
const Theme1 = () => {
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
            <Home data={detailTheme} />
        </div>
    )
}

export default Theme1
