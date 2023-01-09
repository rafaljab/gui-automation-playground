import React from 'react'
import {Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const ShopNav = ({viewCart, setViewCart}: PropsType) => {
    return viewCart
        ?
        <Button
            sx={{minWidth: "250px"}}
            variant="outlined"
            startIcon={<StorefrontIcon/>}
            onClick={() => setViewCart(false)}
        >Browse Products</Button>
        :
        <Button
            sx={{minWidth: "250px"}}
            variant="outlined"
            startIcon={<ShoppingCartIcon/>}
            onClick={() => setViewCart(true)}
        >View Cart</Button>
}

export default ShopNav
