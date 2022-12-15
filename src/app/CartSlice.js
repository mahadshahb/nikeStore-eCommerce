import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    cartState: false,
    cartItems: []
};

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemsCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item Quantity Increased +`);
            }
            else {
                const temp = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} added to cart`);
            }
        }
    }
});

export const { setOpenCart, setCloseCart, setAddItemsCart } = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export default CartSlice.reducer;