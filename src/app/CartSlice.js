import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
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
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setRemoveItemForm: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} Removed From Cart`);
        },
        setIncreaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item Quantity Increased +`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`Item Quantity Decreased -`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            toast.success(`Cart Clear`);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
    }
});

export const { setOpenCart, setCloseCart, setAddItemsCart, setRemoveItemForm , setIncreaseQty , setDecreaseQty , setClearCartItems } = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectItemsCart = (state) => state.cart.cartItems;
export default CartSlice.reducer;