import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state?.items?.push(action.payload);
    },
    removeItem(state, action) {},
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
