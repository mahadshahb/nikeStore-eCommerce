import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItems from './cart/CartItems';

const Cart = () => {
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen blur-effect-theme 
    opacity-100 z-[250]`}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <CartCount/>
            <CartEmpty/>
            <CartItems/>
        </div>
    </div>
  )
}

export default Cart;