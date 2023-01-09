import ShopHeader from '../components/features/shop/ShopHeader';
import Cart from '../components/features/shop/Cart';
import ProductList from '../components/features/shop/ProductList';
import React, {useState} from 'react';
import {Box, Toolbar, Typography} from '@mui/material';

const ShopPage = () => {
    const [viewCart, setViewCart] = useState<boolean>(false)

    const pageContent = viewCart ? <Cart/> : <ProductList/>

    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Toolbar/>
            <Typography variant='h3' gutterBottom>Shop</Typography>
            <ShopHeader viewCart={viewCart} setViewCart={setViewCart}/>
            {pageContent}
        </Box>
    )
}

export default ShopPage;
