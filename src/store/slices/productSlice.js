import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    products: [],
    totalQuantity: 0,
  },
  reducers: {
    addAllProducts(state, action) {
      state.products = action.payload;
    },
    addToProduct(state, action) {
      const newProduct = action.payload;

      const exitsProduct = state.productList.find(
        (product) => product.id === newProduct.id
      );

      if (exitsProduct) {
        exitsProduct.quantity++;
        exitsProduct.totalPrice += parseFloat(newProduct.price, 10);
      } else {
        state.productList.push({
          id: newProduct.id,
          price: parseFloat(newProduct.price, 10),
          quantity: 1,
          rating: newProduct.rating,
          totalPrice: parseFloat(newProduct.price, 10),
          title: newProduct.title,
          image: newProduct.image,
          description: newProduct.description,
        });
        state.totalQuantity++;
      }
    },
    removeFromProduct(state, action) {
      const id = action.payload;
      const exitstingProduct = state.productList.find(
        (exitsproduct) => exitsproduct.id === id
      );

      if (exitstingProduct.quantity === 1) {
        state.productList = state.productList.filter(
          (exitsproduct) => exitsproduct.id !== id
        );
        exitstingProduct.quantity = 0;
        state.totalQuantity--;
      } else {
        exitstingProduct.quantity--;
        exitstingProduct.totalPrice -= parseFloat(exitstingProduct.price, 10);
      }
    },
    removeAllFromProduct(state, action) {
      const id = action.payload;
      const exitstingProduct = state.productList.find(
        (exitsproduct) => exitsproduct.id === id
      );
      if (exitstingProduct.quantity) {
        state.productList = state.productList.filter(
          (exitsproduct) => exitsproduct.id !== id
        );
        state.totalQuantity--;
      }
    },
  },
});

export const {
  addToProduct,
  removeFromProduct,
  removeAllFromProduct,
  addAllProducts,
} = productSlice.actions;
