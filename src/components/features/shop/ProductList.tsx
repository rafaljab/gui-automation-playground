import React, { ReactElement } from "react";
import useCart from "../../../hooks/useCart";
import useProducts from "../../../hooks/useProducts";
import Product from "./Product";
import { Grid, Typography } from "@mui/material";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = (
    <Grid item xs="auto">
      <Typography variant="body2">Loading...</Typography>
    </Grid>
  );

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.id === product.id);

      return (
        <Grid key={product.id} item xs="auto">
          <Product
            key={product.id}
            product={product}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
            inCart={inCart}
          />
        </Grid>
      );
    });
  }

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="baseline"
    >
      {pageContent}
    </Grid>
  );
};

export default ProductList;
