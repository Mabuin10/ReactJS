import { useState } from "react"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './ItemCounter.css'

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
            <InputGroup className="buttonContainer ">
                <Button className="button " variant="danger" size="lg" onClick={handlerIncreaseCount}>+</Button>
                <Form.Control
					value={counter}
					className="text-center formControl "
                    size="lg"
				/>
                <Button className="button" variant="danger" size="lg" onClick={handlerDecreaseCount}>-</Button>
            </InputGroup>
            <div className="stock">
                <span>Stock Disponible: {stock - counter}</span>
                {!!counter && (<Button variant="danger" onClick={() => onAdd(counter)}>Add to Cart</Button>)}
            </div>
        </div>
    )
}