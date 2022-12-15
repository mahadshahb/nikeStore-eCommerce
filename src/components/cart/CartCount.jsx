import React from 'react';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

const CartCount = ({ onCartToggle }) => {
  return (
    <>
      <div className='flex items-center justify-between px-3 sticky left-0 right-0 w-full h-11 bg-white'>
        <div className='flex items-center'>
          <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
          </div>
          <div className='grid items-center'>
            <h1 className='text-base font-medium text-slate-900'>Your Cart <span className='text-slate-100 
             bg-theme-cart rounded py-1 px-1 font-normal text-xs'>
              (Items)
            </span> </h1>
          </div>
        </div>
        <div className='flex items-center'>
          <button type='button' className='rounded bg-theme-cart active:scale-90 p-0.5'>
            <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
          </button>
        </div>
      </div>
    </>
  )
}

export default CartCount;