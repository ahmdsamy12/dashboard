import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsApp } from "../../api/Posts";
import { product } from "../../components/products/Products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = await productsApp.get("");
    return products.data;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [],
  reducers: {
    addToCart: (state: product[], action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
