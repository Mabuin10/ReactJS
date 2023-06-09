import { useContext, useState } from "react"
import { getFirestore, collection, addDoc} from 'firebase/firestore'
import { CartContext } from "../../Context/CartContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import './CheckoutForm.css'

export const CheckoutForm = () => {
    
    const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: ""
	})

    const { clearCart, cart, Total } = useContext(CartContext)


    const sendOrder = () => {
		const order = {
			buyer: formValues,
			items: cart,
			total: Total(),
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

	addDoc(orderCollection, order).then(response => {
			if (response.id) {
				clearCart()
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
							<Form.Label className="form">Name</Form.Label>
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
							<Form.Label className="form">Email</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.email}
								className="form"
								type="email"
								name="email"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label className="form">Phone</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.phone}
								className="form"
								type="text"
								name="phone"
							/>
						</Form.Group>
						<Button
							variant="danger"
							type="button"
							onClick={sendOrder}
						>
							Finish
						</Button>
					</Form>
        </div>
    )
}