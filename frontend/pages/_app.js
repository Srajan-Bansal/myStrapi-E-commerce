import '../styles/globals.css'
import NavBar from '../component/NavBar'
import { useEffect, useState } from 'react'



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    return () => {
  
    }
  }, [])

  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);

  const addToCart = (item, qty, price) => {
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      cart.push([item, price]);
    }
    setCart(newCart)
    setReloadKey(Math.random());
  }
  const removeToCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart)
  }
  const clearCart = (item) => {
    setCart([]);
  }

  return <>
    <NavBar key={reloadKey} cart={cart} />
    <Component cart={cart} removeToCart={removeToCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
  </>
}

export default MyApp
