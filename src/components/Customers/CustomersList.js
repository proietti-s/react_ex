import React from "react";

import Card from "../UI/Card";


const CustomersList = props => {
    // const [customer, setCustomer] = useState('')
    // const customers = props.data.map((customer) => console.log(customer))

    return (
        <>
            {props.data.map((customer) =>
                <Card key={customer.id}>
                    <header>
                        <h2>Customer</h2>
                    </header>
                    <div>
                        <p><b>Name</b>: {customer.firstName} </p>
                        <p><b>LastName</b>: {customer.secName} </p>
                        <p><b>Email</b>: {customer.email} </p>
                    </div>
                </Card>
            )}
        </>
    )
}

export default CustomersList