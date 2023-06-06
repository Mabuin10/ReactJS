import { useState} from "react"

export const ItemCounter = ({ stock, onAdd, initial }) => {
    const [counter, setCounter] = useState(initial ?? 0)

    const handlerIncreaseCount = () => {
        if (stock > counter) setCounter(counter + 1)
    }

    const handlerDecreaseCount = () => {
        if (counter > 0) setCounter(counter - 1)
    }

    return (
        <div>
            <div>
                <button onClick={handlerIncreaseCount}>+</button>
                <h3>{counter}</h3>
                <button onClick={handlerDecreaseCount}>-</button>
            </div>
            <div>
                <span>Stock Disponible: {stock - counter}</span>
                {!!counter && (<button onClick={()=> onAdd(counter)}>Agregar al Carrito</button>)}
            </div>
        </div>
    )
}