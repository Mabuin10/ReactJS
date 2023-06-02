import { useState } from "react";
import Container from "react-bootstrap/esm/Container"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Cart = () => {
    const [formValues, setFormValues]=useState({
        name:"",
        number:"",
        email:""
    })
    const handleChange = ev => {
        setFormValues (prev => ({...prev, [ev.target.name]: ev.target.value,})
    )}
    return (
    <Container>
        <h1>Lista de Productos</h1>
        <div>Productos</div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} value={formValues.name} name="name" type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleChange} value={formValues.email} name="email" type="email" placeholder="email@email.com" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control onChange={handleChange} value={formValues.number} name="number" type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Finalizar Compra!
      </Button>
    </Form>
    </Container>
)}