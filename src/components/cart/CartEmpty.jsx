import React from 'react'
import emptybag from '../../../assets/emptybag.png';
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const CartEmpty = ({onCartToggle}) => {
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={emptybag}
          alt="emptybag/img"
          className='w-40 lg:w-36 sm:w-28 object-fill transition-all duration-300
          hover:scale-110 h-auto '
        />
        <button type='button' onClick={onCartToggle} className='button-theme bg-gradient-to-b from-amber-500 to-orange-500
        shadow-lg shadow-orange-500 flex items-center justify-between py-3 gap-3 text-sm font-semibold'>
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span className=''>Back To Nike Store</span>
        </button>
      </div>
   </>
  )
}
export default CartEmpty;