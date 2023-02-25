import React, {memo, ReactElement} from 'react'
import {CartItemType, ReducerAction, ReducerActionType} from '../../../context/CartProvider';
import {
    Avatar,
    Badge,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    ListItem,
    ListItemAvatar,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography
} from '@mui/material';
import Delete from '@mui/icons-material/Delete';

type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const CartLineItem = ({item, dispatch, REDUCER_ACTIONS}: PropsType) => {
    const lineTotal: number = (item.qty * item.price)

    const highestQty: number = 20 > item.qty ? 20 : item.qty
    const optionValues: number[] = Array.from({length: highestQty}, (_, i) => i + 1)

    const options: ReactElement[] = optionValues.map(val => {
        return <MenuItem key={`opt${val}`} value={val}>{val}</MenuItem>
    })

    const onChangeQty = (e: SelectChangeEvent) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: {...item, qty: Number(e.target.value)}
        })
    }

    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item
    })

    return (
        <ListItem
            divider={true}
            sx={{padding: "15px"}}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="Remove Item From Cart"
                    title="Remove Item From Cart"
                    onClick={onRemoveFromCart}
                >
                    <Delete/>
                </IconButton>
            }
        >
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Grid item>
                    <ListItemAvatar>
                        <Badge badgeContent={item.qty} color="primary">
                            <Avatar
                                src={item.thumbnail}
                                alt={item.title}
                                sx={{width: 56, height: 56}}
                                variant="rounded"
                            />
                        </Badge>
                    </ListItemAvatar>
                </Grid>
                <Grid item width={150}>
                    <ListItemText
                        primary={item.title}
                        secondary={
                            <>
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(item.price)}
                            </>
                        }
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel id="itemQty">
                            Item Quantity
                        </InputLabel>
                        <Select
                            labelId="itemQty"
                            id="itemQtySelect"
                            value={item.qty.toString()}
                            label="Item Quantity"
                            onChange={onChangeQty}
                            sx={{width: "100px"}}
                        >
                            {options}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <ListItemText
                        aria-label="Line Item Subtotal"
                        primary={
                            <Typography>Subtotal Price: {new Intl.NumberFormat(
                                'en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }
                            ).format(lineTotal)}</Typography>
                        }
                    />
                </Grid>
            </Grid>
        </ListItem>
    )
}

function areItemsEqual({item: prevItem}: PropsType, {item: nextItem}: PropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
    })
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)

export default MemoizedCartLineItem
