import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (data) => data.id === action.payload.id && data.restaurantName === action.payload.restaurantName
      );
      console.log(itemInCart);
      if (itemInCart) {
        itemInCart.description = action.payload.description
        itemInCart.container = action.payload.container
        itemInCart.amount += action.payload.amount;
      } else {
        state.cart.push({
          restaurantName: action.payload.restaurantName,
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          menu_pic: action.payload.menu_pic,
          est_time: action.payload.est_time.split(" ")[0],
          amount: action.payload.amount,
        });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedCart = [...state.cart];
      if (removeFromCartIndex !== -1) {
        updatedCart.splice(removeFromCartIndex, 1);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        console.warn('Item not found in the cart.'); // Handle the case where the item is not found
      }
    },
    removeAllFromCart: (state, action) => {
      return {
        ...state,
        cart: [],
      };
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
  removeAllFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
