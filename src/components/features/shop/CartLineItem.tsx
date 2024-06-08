import React, { memo, ReactElement } from "react";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../context/CartProvider";
import {
  Avatar,
  Badge,
  Box,
  Divider,
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
  Stack,
  Typography,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const lineTotal: number = item.qty * item.price;

  const highestQty: number = 20 > item.qty ? 20 : item.qty;
  const optionValues: number[] = Array.from(
    { length: highestQty },
    (_, i) => i + 1,
  );

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <MenuItem key={`opt${val}`} value={val}>
        {val}
      </MenuItem>
    );
  });

  const onChangeQty = (e: SelectChangeEvent) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  return (
    <ListItem
      divider={true}
      sx={{ padding: "15px" }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="Remove Item From Cart"
          title="Remove Item From Cart"
          onClick={onRemoveFromCart}
        >
          <Delete />
        </IconButton>
      }
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="start"
        spacing={2}
      >
        <Grid item xs={"auto"}>
          <ListItemAvatar>
            <Badge
              badgeContent={item.qty}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Avatar
                src={item.thumbnail}
                alt={item.title}
                sx={{
                  width: ["95%", "200px"],
                  height: ["95%", "200px"],
                  boxShadow: 1,
                }}
                variant="rounded"
              />
            </Badge>
          </ListItemAvatar>
        </Grid>

        <Grid
          item
          xs={"auto"}
          justifyContent="start"
          sx={{ marginTop: 0, paddingTop: 0 }}
        >
          <Box
            sx={{
              marginTop: 0,
              paddingTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <ListItemText
              primary={item.title}
              sx={{ marginTop: 0 }}
              primaryTypographyProps={{ fontWeight: "bold" }}
              secondary={
                <>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price)}
                </>
              }
            />

            <Stack
              direction="row"
              spacing={1}
              sx={{
                paddingTop: 2,
              }}
              alignItems="center"
              justifyContent="flex-end"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <FormControl>
                <InputLabel id="itemQty">Item Quantity</InputLabel>
                <Select
                  labelId="itemQty"
                  id="itemQtySelect"
                  value={item.qty.toString()}
                  label="Item Quantity"
                  onChange={onChangeQty}
                  sx={{ width: "100px" }}
                >
                  {options}
                </Select>
              </FormControl>
              <ListItemText
                aria-label="Line Item Subtotal"
                primary={
                  <Typography fontSize={14}>
                    Subtotal Price:{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(lineTotal)}
                  </Typography>
                }
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};

function areItemsEqual(
  { item: prevItem }: PropsType,
  { item: nextItem }: PropsType,
) {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
    );
  });
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(
  CartLineItem,
  areItemsEqual,
);

export default MemoizedCartLineItem;
