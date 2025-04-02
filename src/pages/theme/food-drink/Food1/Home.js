import { CardCategories, CardProdoct, Categories, CategoriesContainer, CategoriesTop, HomeContainer, IconSearch, ImageProduct, InputSearch, ListCategories, MenuCategory, Menus, NamaCategorie, ProductContainer, Search, SearchContainer } from '@/components/Theme/Food1/Home'
import React, { useState } from 'react'


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


const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(angka);
};


const Home = (props) => {
    const { setViewPage, category, product, setOpenModal } = props
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
                    <p onClick={() => setViewPage("Categories")}>View All</p>
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
                        <CardProdoct key={i} onClick={() => setOpenModal(p)}>
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
