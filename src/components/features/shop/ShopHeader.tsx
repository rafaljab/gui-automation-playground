import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import ShopNav from "./ShopNav";
import useCart from "../../../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopHeader = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  return (
    <Box>
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Typography variant="body1" data-testid="shop-header-total-items">
            Total Items: {totalItems}
          </Typography>
          <Typography variant="body1" data-testid="shop-header-total-price">
            Total Price: {totalPrice}
          </Typography>
        </Stack>
        <ShopNav viewCart={viewCart} setViewCart={setViewCart} />
      </Box>
      <Box
        sx={{
          alignItems: "center",
        }}
      >
        <Divider
          sx={{ paddingTop: "10px", paddingBottom: "10px" }}
          role="presentation"
        >
          <Typography variant="h5">{viewCart ? "CART" : "PRODUCTS"}</Typography>
        </Divider>
      </Box>
    </Box>
  );
};

export default ShopHeader;
