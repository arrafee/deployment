/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        productFreshness: "Doe",
        productPrice: "Doe",
        imageProduct: "",
        additionalDescription: "Doe",
      },
    ],
  },
  reducers: {
    addProduct(state, action) {
      const { payload } = action;
      const newProduct = {
        id: payload.id,
        productName: payload.productName,
        productCategory: payload.productCategory,
        productFreshness: payload.productFreshness,
        productPrice: payload.productPrice,
        imageProduct: payload.imageProduct,
        additionalDescription: payload.additionalDescription,
      };

      // console.log(state.products);

      state.products.push(newProduct);
      //   return [...state, newProduct];
    },
    editProduct(state, action) {
      const { payload } = action;
      state.products.map((product, index) => {
        if (product.id === payload.id) {
          state.products[index] = {
            ...product[index],
            ...payload,
          };
        }
      });
    },
    deleteProduct(state, action) {
      const { payload } = action;
      state.products.map((product, index) => {
        if (product.id === payload) {
          try {
            state.products.splice(index, 1);
          } catch (e) {
            console.log(e);
          }
        }
      });
      // console.log(state.products.length);
    },
  },
});

// ekport action untuk dispatch
export const { addProduct, editProduct, deleteProduct } = productSlice.actions;

// export reducer untuk configure store
export default productSlice.reducer;
