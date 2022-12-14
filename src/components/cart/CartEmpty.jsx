import React from 'react'
import emptybag from '../../../assets/emptybag.png';
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const CartEmpty = () => {
  return (
   <>
      <div className=''>
        <img
          src={emptybag}
          alt="emptybag/img"
          className=''
        />
        <button type='button' className=''>
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span className=''>Back To Nike Store</span>
        </button>
      </div>
   </>
  )
}
export default CartEmpty;