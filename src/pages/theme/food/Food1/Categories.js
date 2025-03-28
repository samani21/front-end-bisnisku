import { CardCategories, CardCategoriesContainer, CategoriesContainer, ListCategories, NamaCategorie } from '@/components/Theme/Food1/Categories';
import { CardProdoct, ImageProduct, ProductContainer } from '@/components/Theme/Food1/Home';
import React, { useState, useRef } from 'react';

const Categories = (props) => {
    const { category, product } = props;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const menuRef = useRef(null);

    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(angka);
    };

    const handleCategoryClick = (nama) => {
        setSelectedCategory(nama);
        menuRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const filteredProducts = selectedCategory
        ? product?.filter((p) => p.category === selectedCategory)
        : product;

    return (
        <CategoriesContainer>
            <h5>Semua Categories</h5>
            <ListCategories>
                {category?.map((c, i) => (
                    <CardCategoriesContainer key={i} onClick={() => handleCategoryClick(c?.nama)} style={{ cursor: 'pointer' }}>
                        <CardCategories image={c?.image}>
                            <NamaCategorie>
                                <h3>{c?.nama}</h3>
                            </NamaCategorie>
                        </CardCategories>
                    </CardCategoriesContainer>
                ))}
            </ListCategories>
            <h5 ref={menuRef}>Menu {selectedCategory ? `- ${selectedCategory}` : ''}</h5>
            <ProductContainer>
                {filteredProducts?.map((p, i) => (
                    <CardProdoct key={i}>
                        <ImageProduct image={p?.image} />
                        <h3>{p?.nama}</h3>
                        <p>{formatRupiah(p?.harga)}</p>
                    </CardProdoct>
                ))}
            </ProductContainer>
        </CategoriesContainer>
    );
};

export default Categories;
