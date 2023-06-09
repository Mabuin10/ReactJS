import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    const addItem = (item, quantity) => {
        const { stock, ...rest } = item

        const isInCart = cart.some(item => item.id === rest.id)
        if (!isInCart) 
            setCart(prev => [...prev, { ...rest, quantity},
            ])
            
        else {
            const ActProd = cart.map(
                item => {
                    if (item.id === rest.id)
                    
                        return{
                            ...item, quantity: item.quantity + quantity,
                        }
                        
                    else return item 

                }
            )    
        setCart(ActProd)
        }
    }

    const removeItem = id => {
        const cartUpdated = cart.filter(item => item.id !== id)
        setCart(cartUpdated)
    }

    const Total = () => cart.reduce(
        (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price, 0
      )

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{CartProvider, cart, addItem, removeItem, clearCart, Total }}>
            {children}
        </CartContext.Provider>
    )
}