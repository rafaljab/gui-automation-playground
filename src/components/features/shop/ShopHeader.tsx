import React from 'react'
import {Box, Divider, Stack, Typography} from '@mui/material';
import ShopNav from './ShopNav';
import useCart from '../../../hooks/useCart';

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const ShopHeader = ({viewCart, setViewCart}: PropsType) => {
    const {totalItems, totalPrice} = useCart()

    return (
        <Box>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="flex-end"
                divider={<Divider orientation="vertical" flexItem/>}
            >
                <Typography variant="body1">Total Items: {totalItems}</Typography>
                <Typography variant="body1">Total Price: {totalPrice}</Typography>
                <ShopNav viewCart={viewCart} setViewCart={setViewCart}/>
            </Stack>
            <Divider sx={{paddingTop: "10px", paddingBottom: "10px"}} role="presentation">
                <Typography variant="h5">{viewCart ? "CART" : "PRODUCTS"}</Typography>
            </Divider>
        </Box>
    )
}

export default ShopHeader;
