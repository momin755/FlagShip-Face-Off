import React, {  useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { getCart } from '../utils/utils';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        setCart(getCart)
    }, [])
    return (
        <div>
         <CartContext.Provider value={{cart, setCart}}>
        {children}
        </CartContext.Provider>   
        </div>
    );
};

export default CartProvider;