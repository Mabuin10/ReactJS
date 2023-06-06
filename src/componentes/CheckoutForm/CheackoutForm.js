import { useState } from "react"
import { getFirestore, collection, addDoc} from 'firebase/firestore'
import { CartContext } from "../../Context/CartContext"
import { Cart } from "../Cart/Cart"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export const CheckoutForm = () => {
    
    const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

    const {clearCart} = useState(CartContext)


    const sendOrder = () => {
		const order = {
			buyer: formValues,
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

	addDoc(orderCollection, order).then(response => {
			if (response.id) {
				clearCart
				alert("Su orden: " + response.id + " ha sido completada!")
			}
		})
	}

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
            [ev.target.email]: ev.target.value,
            [ev.target.phone]: ev.target.value,
		}))
	}

    return (
        <div>
            <Form>
						<Form.Group
							className="mb-3"
							controlId="formBasicEmail"
						>
							<Form.Label>Name</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.name}
								type="text"
								name="name"
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="formBasicEmail"
						>
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.email}
								type="email"
								name="email"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.phone}
								type="text"
								name="phone"
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="button"
							onClick={sendOrder}
						>
							Submit
						</Button>
					</Form>
            {/* <form> 
                <label>
                    Name
                    <input type='text' value={formValues.name} onChange={ handleChange } />
                </label>
                <label>
                    Phone
                    <input type='text' value={formValues.phone} onChange={ handleChange }/>
                </label>
                <label>
                    Email
                    <input type='email' value={formValues.email} onChange={ handleChange }/>
                </label>
                <div>
                    <button type="submit" onClick={sendOrder}>Order It!</button>
                </div>
            </form> */}
        </div>
    )
}