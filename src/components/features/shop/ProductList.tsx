import React, {ReactElement} from 'react'
import useCart from '../../../hooks/useCart';
import useProducts from '../../../hooks/useProducts';
import Product from './Product';
import {Stack, Typography} from '@mui/material';

const ProductList = () => {
    const {dispatch, REDUCER_ACTIONS, cart} = useCart()
    const {products} = useProducts()

    let pageContent: ReactElement | ReactElement[] = <Typography variant="body2">Loading...</Typography>

    if (products?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)

            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}/>
            )
        })
    }

    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
        >
            {pageContent}
        </Stack>
    )
}

export default ProductList
