import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';
import { setOpenCart } from '../app/CartSlice';

const NavBar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }
    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true)
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        // return () => {
        //     Window.removeEventListener('scroll', onNavScroll);
        // }
    }, []);
    return (
        <>
            <header className={
                !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' :
                    'fixed top-0 left-0 right-0 h-[11vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='nike-container flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && "filter brightness-0"}`} />
                    </div>
                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center'> <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} /> </li>
                        <li className='grid items-center'> <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} /> </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110
                            transition-all duration-300 relative
                            '>
                                <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className='
                                absolute top-4 right-0 bg-white text-slate-900 shadow
                                 shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight
                                 font-medium rounded-full flex items-center justify-center
                                 cursor-pointer hover:scale-110 transition-all duration-300
                                '>0</div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;