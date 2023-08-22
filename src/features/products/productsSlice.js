import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
  fetchProducts,
  fetchSingleProducts,
  postProduct,
} from "../products/productsApi";

const initialState = {
  products: [],
  isLoading: false,
  postSucces: false,
  isError: false,
  error: "",
};
export const getProcuts = createAsyncThunk("products/getProcut", async () => {
  const products = fetchProducts();
  return products;
});

export const getSingleProcut = createAsyncThunk(
  "products/getSingleProcut",
  async (id) => {
    const products = fetchSingleProducts(id);
    return products;
  }
);
export const addProcut = createAsyncThunk(
  "products/addProcut",
  async (data) => {
    const products = postProduct(data);
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    togglePostSucces: (state) => {
      state.postSucces = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProcuts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProcuts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProcuts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(getSingleProcut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSingleProcut.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getSingleProcut.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addProcut.pending, (state) => {
        state.isLoading = true;
        state.postSucces = false;
        state.isError = false;
      })
      .addCase(addProcut.fulfilled, (state) => {
        state.postSucces = true;
        state.isLoading = false;
      })
      .addCase(addProcut.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.postProduct = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});
export const {togglePostSucces} = productsSlice.actions;
export default productsSlice.reducer;
