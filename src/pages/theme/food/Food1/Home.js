import { CardCategories, CardProdoct, Categories, CategoriesContainer, CategoriesTop, HomeContainer, IconSearch, ImageProduct, InputSearch, ListCategories, MenuCategory, Menus, NamaCategorie, ProductContainer, Search, SearchContainer } from '@/components/Theme/Food1/Home'
import React, { useState } from 'react'

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

]
const menuCategory = [
    'Flash Sale',
    'Popular',
    'New Arrival',
    'Makanan Berat',
    'Makanan Ringan',
    'Minuman',
    'Dessert',
    'Snack',
    'Paket Hemat',
    'Rekomendasi Chef'
];

const product = [
    {
        nama: "Ikan Goreng",
        image: "https://asset.kompas.com/crops/3yfnIXlVWtZFQwOkuC06u6szZZY=/0x0:1000x667/750x500/data/photo/2020/04/20/5e9da17b42993.jpg",
        menu_category: "Popular",
        harga: 35000
    },
    {
        nama: "Ayam Bakar",
        image: "https://cdn.idntimes.com/content-images/community/2023/08/ins-saver-868477387-b92c30be9bda955e59d280759a6f55b9.jpg",
        menu_category: "Popular",
        harga: 30000
    },
    {
        nama: "Nasi Goreng Pedas",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ae6d7be8ee924ba32b6175d12b7cfdac/Derivates/7c281c92d3d1501691729e4e45136927a11fe847.jpg",
        menu_category: "Flash Sale",
        harga: 25000
    },
    {
        nama: "Mie Kuah",
        image: "https://assets.unileversolutions.com/v1/55546655.jpg",
        menu_category: "Flash Sale",
        harga: 20000
    },
    {
        nama: "Bakso Beranak",
        image: "https://img-global.cpcdn.com/recipes/62bc0149e02866d8/1200x630cq70/photo.jpg",
        menu_category: "New Arrival",
        harga: 30000
    },
    {
        nama: "Jus Mangga",
        image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/08/05072542/manfaat-mengonsumsi-jus-mangga-untuk-kesehatan-tubuh-halodoc.jpg.webp",
        menu_category: "Flash Sale",
        harga: 15000
    },
    {
        nama: "Teh Manis",
        image: "https://dcostseafood.id/wp-content/uploads/2021/12/Teh-tawar-manis.jpg",
        menu_category: "Popular",
        harga: 5000
    },
];

const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(angka);
};


const Home = () => {
    const [menuActive, setMenuActive] = useState('Popular')
    return (
        <HomeContainer>
            <SearchContainer>
                <Search>
                    <InputSearch placeholder='Cari' />
                    <IconSearch src='/icon/search-theme-1.svg' />
                </Search>
            </SearchContainer>
            <CategoriesContainer>
                <CategoriesTop>
                    <h3>Categories</h3>
                    <p>View All</p>
                </CategoriesTop>
                <Categories>
                    {
                        category?.map((c, i) => (

                            <CardCategories key={i} image={c?.image}>

                                <NamaCategorie>
                                    <h3>
                                        {c?.nama}
                                    </h3>
                                </NamaCategorie>
                            </CardCategories>
                        ))
                    }
                </Categories>
            </CategoriesContainer>
            <MenuCategory>
                {
                    menuCategory?.map((m, i) => (
                        <Menus key={i} onClick={() => setMenuActive(m)} className={m === menuActive ? 'active' : ""}>{m}</Menus>
                    ))
                }
            </MenuCategory>
            <ProductContainer>
                {
                    product?.filter((p) => p?.menu_category === menuActive)?.map((p, i) => (
                        <CardProdoct key={i}>
                            <ImageProduct image={p?.image} />
                            <h3>
                                {p?.nama}
                            </h3>
                            <p>{formatRupiah(p?.harga)}</p>
                        </CardProdoct>
                    ))
                }
            </ProductContainer>
        </HomeContainer>
    )
}

export default Home
