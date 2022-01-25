import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & form {
        text-align: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem;
    }
    & input{
        padding: 0.5rem;
        border-radius: 10px;
        border: none;
        background-color: rgba(0,0,0,0.1);
        box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        margin: 0 1rem;
        font-family: inherit;
    }
    & label{
        font-size: 1.3rem;
        color: beige;
        padding: 0.5rem;
        font-weight: 700;
    }
`


const AddCustomers = (props) => {
    const [customer, setCustomer] = useState('')

    const [customerName, setCustomerName] = useState('')
    const [customerSurname, setCustomerSurname] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')

    const changeCustomerName = (e) => {
        e.preventDefault()

        setCustomerName(e.target.value)
        // console.log(customerName)
        e.target.value = ''
    }
    const changheCustomerSurname = (e) => {
        e.preventDefault()

        setCustomerSurname(e.target.value)
        // console.log(customerSurname);
        e.target.value = ''
    }
    const changheCustomerEmail = (e) => {
        e.preventDefault()
        setCustomerEmail(e.target.value)
        // console.log(customerEmail);
        e.target.value=''
    }


    const addCustomerHandler = (e) => {
        e.preventDefault()
        // console.log('okay')
        // console.log(e.target.value);

        setCustomer({
            name: customerName,
            lastName: customerSurname,
            email: customerEmail
        })
      
        props.onAddCustomer(customer)
        console.log(customer);
        e.target.value=''
        
    }
    return (
        <Card>
            <Container>

                <form onSubmit={addCustomerHandler}>
                    <label>Name</label>
                    <input type="text" value={customerName} onChange={changeCustomerName} />
                    <label>Surname</label>
                    <input type="text" value={customerSurname} onChange={changheCustomerSurname} />
                    <label>Email</label>
                    <input type="text" value={customerEmail} onChange={changheCustomerEmail} />
                    <Button type="submit" />
                </form>
            </Container>
        </Card>
    )
}

export default AddCustomers; 