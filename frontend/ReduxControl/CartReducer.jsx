import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (data) => data.id === action.payload.id
      );
      console.log(itemInCart);
      if (itemInCart) {
        itemInCart.amount += action.payload.amount;
      } else {
        state.cart.push({
          restaurantName: action.payload.restaurantName,
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          menu_pic: action.payload.menu_pic,
          amount: action.payload.amount,
        });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (data) => data.id != action.payload.id
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (data) => data.id == action.payload.id
      );
      itemInCart.amount++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (data) => data.id == action.payload.id
      );
      if (itemInCart.amount == 1) {
        const removeFromCart = state.cart.filter(
          (data) => data.id != action.payload.id
        );
        state.cart = removeFromCart;
      } else {
        itemInCart.amount--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
