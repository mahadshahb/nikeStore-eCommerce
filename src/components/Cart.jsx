import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItems from './cart/CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, selectItemsCart, setClearCartItems, setCloseCart } from '../app/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const ifcartState = useSelector(selectCartState);
  const cartItems = useSelector(selectItemsCart);
  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState: false
    }));
  }
  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  }
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen blur-effect-theme 
    opacity-100 z-[250] ${ifcartState ? 'opacity-100 visible translate-x-0' :
        'opacity-0 invisible translate-x-8'}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle}  onClearCartItems={onClearCartItems}/>
        {
          cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle}/> : <div>
            <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 py-3 overflow-y-scroll scroll-smooth h-[81vh] scroll-hidden'>
              {
                cartItems?.map((item, i) => {
                  return (
                    <CartItems key={i} item={item} />
                  )
                })
              }
            </div>
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5"></h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart;