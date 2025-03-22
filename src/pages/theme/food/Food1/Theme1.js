import { ThemeContainer } from '@/components/Theme/Food1/Theme1'
import React from 'react'
import Header from './Header'
import Head from 'next/head'
import Home from './Home'

const detailTheme = {
    nama: "Usahaku",
    logo: "/icon/logo-client.png",
    color_primary: "#18b24b",
}

const Theme1 = () => {
    return (
        <ThemeContainer>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap" rel="stylesheet" />
            </Head>
            <Header data={detailTheme} />
            <Home data={detailTheme} />
        </ThemeContainer>
    )
}

export default Theme1
