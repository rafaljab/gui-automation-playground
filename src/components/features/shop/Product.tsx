import React, {memo, ReactElement} from 'react'
import {ProductType} from '../../../context/ProductsProvider';
import {ReducerAction, ReducerActionType} from '../../../context/CartProvider';
import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType): ReactElement => {
    const img: string = `/images/${product.sku}.jpg` // for dev mode

    const onAddToCart = () => dispatch({type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1}})

    const buttonAddToCart = inCart
        ?
        <IconButton
            size="large"
            aria-label="Product In Cart"
            title="Product In Cart"
            onClick={onAddToCart}
        >
            <CheckIcon/>
        </IconButton>
        :
        <IconButton
            size="large"
            aria-label="Add Product"
            title="Add Product"
            onClick={onAddToCart}
        >
            <AddShoppingCartIcon/>
        </IconButton>

    return (
        <Card sx={{width: 340}}>
            <CardMedia
                sx={{height: 220}}
                image={img}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" paddingLeft="10px">
                    <Grid item>
                        <Typography variant="body2">
                            Price: {new Intl.NumberFormat('en-US',
                            {style: 'currency', currency: 'USD'}).format(product.price)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {buttonAddToCart}
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

function areProductsEqual(
    {product: prevProduct, inCart: prevInCart}: PropsType,
    {product: nextProduct, inCart: nextInCart}: PropsType
) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct
