import { ThemeContainer } from '@/components/Theme/Food1/Theme1'
import React, { useState } from 'react'
import Header from './Header'
import Head from 'next/head'
import Home from './Home'
import Categories from './Categories'
import Navbar from './Navbar'
import Payment from '@/pages/components/Payment'
import Modal from './Modal'

const detailTheme = {
    nama: "Usahaku",
    logo: "/icon/logo-client.png",
    color_primary: "#18b24b",
    color_secondary: "#f4fbf6",
}

const Theme1 = () => {
    const [viewPage, setViewPage] = useState('Home');
    const [openModal, setOpenModal] = useState();
    const category = [
        {
            nama: "Ikan",
            image: "https://asset.kompas.com/crops/3yfnIXlVWtZFQwOkuC06u6szZZY=/0x0:1000x667/750x500/data/photo/2020/04/20/5e9da17b42993.jpg"
        },
        {
            nama: "Ayam",
            image: "https://cdn.idntimes.com/content-images/community/2023/08/ins-saver-868477387-b92c30be9bda955e59d280759a6f55b9.jpg"
        },
        {
            nama: "Nasi Goreng",
            image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ae6d7be8ee924ba32b6175d12b7cfdac/Derivates/7c281c92d3d1501691729e4e45136927a11fe847.jpg"
        },
        {
            nama: "Mie",
            image: "https://assets.unileversolutions.com/v1/55546655.jpg"
        },
        {
            nama: "Bakso",
            image: "https://img-global.cpcdn.com/recipes/62bc0149e02866d8/1200x630cq70/photo.jpg"
        },
        {
            nama: "Jus",
            image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/08/05072542/manfaat-mengonsumsi-jus-mangga-untuk-kesehatan-tubuh-halodoc.jpg.webp"
        },
        {
            nama: "Teh",
            image: "https://dcostseafood.id/wp-content/uploads/2021/12/Teh-tawar-manis.jpg"
        },
        {
            nama: "Lain lain",
            image: "https://dcostseafood.id/wp-content/uploads/2021/12/Teh-tawar-manis.jpg"
        },

    ];
    const product = [
        {
            nama: "Ikan Goreng",
            image: "https://asset.kompas.com/crops/3yfnIXlVWtZFQwOkuC06u6szZZY=/0x0:1000x667/750x500/data/photo/2020/04/20/5e9da17b42993.jpg",
            menu_category: "Popular",
            category: "Ikan",
            harga: 35000,
            ukuran: ["Kecil", "Sedang", "Besar"],
            jenis: ["Gurih", "Pedas"]
        },
        {
            nama: "Ayam Bakar",
            image: "https://cdn.idntimes.com/content-images/community/2023/08/ins-saver-868477387-b92c30be9bda955e59d280759a6f55b9.jpg",
            menu_category: "Popular",
            category: "Ayam",
            harga: 30000,
            ukuran: ["Paha", "Dada"],
            jenis: ["Manis", "Gurih", "Pedas"]
        },
        {
            nama: "Nasi Goreng Pedas",
            image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ae6d7be8ee924ba32b6175d12b7cfdac/Derivates/7c281c92d3d1501691729e4e45136927a11fe847.jpg",
            menu_category: "Flash Sale",
            category: "Nasi Goreng",
            harga: 25000,
            ukuran: ["Sedang", "Besar"],
            jenis: ["Pedas", "Gurih"]
        },
        {
            nama: "Mie Kuah",
            image: "https://assets.unileversolutions.com/v1/55546655.jpg",
            menu_category: "Flash Sale",
            category: "Mie",
            harga: 20000,
            ukuran: ["Kecil", "Sedang"],
            jenis: ["Gurih", "Pedas"]
        },
        {
            nama: "Bakso Beranak",
            image: "https://img-global.cpcdn.com/recipes/62bc0149e02866d8/1200x630cq70/photo.jpg",
            menu_category: "New Arrival",
            category: "Bakso",
            harga: 30000,
            ukuran: ["Sedang", "Besar"],
            jenis: ["Pedas", "Gurih"]
        },
        {
            nama: "Jus Mangga",
            image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/08/05072542/manfaat-mengonsumsi-jus-mangga-untuk-kesehatan-tubuh-halodoc.jpg.webp",
            menu_category: "Flash Sale",
            category: "Jus",
            harga: 15000,
            ukuran: ["Kecil", "Medium", "Besar"],
            jenis: ["Dingin", "Manis"]
        },
        {
            nama: "Teh Manis",
            image: "https://dcostseafood.id/wp-content/uploads/2021/12/Teh-tawar-manis.jpg",
            menu_category: "Popular",
            category: "Teh",
            harga: 5000,
            ukuran: ["Kecil", "Sedang"],
            jenis: ["Panas", "Manis"]
        }
    ];

    return (
        <ThemeContainer>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            {
                viewPage != 'History' &&
                <Header data={detailTheme} setViewPage={setViewPage} />
            }
            {
                viewPage === 'Home' ?
                    <Home data={detailTheme} setViewPage={setViewPage} category={category} product={product} setOpenModal={setOpenModal} /> :
                    viewPage === 'Categories' ?
                        <Categories data={detailTheme} setViewPage={setViewPage} category={category} product={product} setOpenModal={setOpenModal} /> :
                        viewPage === 'History' ?
                            <Payment /> : 22
            }

            {
                openModal &&
                <Modal setOpenModal={setOpenModal} data={openModal} detailTheme={detailTheme} />
            }
            <Navbar data={detailTheme} setViewPage={setViewPage} viewPage={viewPage} />
        </ThemeContainer>
    )
}

export default Theme1
