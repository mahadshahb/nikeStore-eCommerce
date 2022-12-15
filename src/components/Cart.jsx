import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItems from './cart/CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, setCloseCart } from '../app/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const ifcartState = useSelector(selectCartState);
  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState: false
    }));
  }
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen blur-effect-theme 
    opacity-100 z-[250] ${ifcartState ? 'opacity-100 visible translate-x-0' :
        'opacity-0 invisible translate-x-8'}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle} />
        <CartEmpty />
        <CartItems />
      </div>
    </div>
  )
}

export default Cart;