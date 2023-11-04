import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import ProductsSlice from "./slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type appDispatch = typeof store.dispatch;

export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
