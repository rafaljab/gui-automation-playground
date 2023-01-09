import React, {useState} from 'react'
import useCart from '../../../hooks/useCart';
import CartLineItem from './CartLineItem';
import {Box, Button, Divider, List, Stack, Typography} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Cart() {
    const [confirm, setConfirm] = useState<boolean>(false)
    const {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart} = useCart()

    const onSubmitOrder = () => {
        dispatch({type: REDUCER_ACTIONS.SUBMIT})
        setConfirm(true)
    }

    return confirm
        ?
        <Typography variant="body1">Thank you for your order.</Typography>
        :
        <>
            <List sx={{width: '100%'}}>
                {cart.map(item => {
                    return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    )
                })}
            </List>

            {cart.length === 0 ? <Typography variant="body1">There's nothing in your cart!</Typography> : null}

            <Box sx={{paddingTop: "10px"}}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="flex-end"
                    divider={<Divider orientation="vertical" flexItem/>}
                >
                    <Typography sx={{fontWeight: "bold"}} variant="body1">Total Items: {totalItems}</Typography>
                    <Typography sx={{fontWeight: "bold"}} variant="body1">Total Price: {totalPrice}</Typography>
                    <Button
                        sx={{minWidth: "250px"}}
                        variant="contained"
                        disabled={!totalItems}
                        startIcon={<ShoppingCartCheckoutIcon/>}
                        onClick={onSubmitOrder}
                    >Place Order</Button>
                </Stack>
            </Box>
        </>
}

export default Cart
