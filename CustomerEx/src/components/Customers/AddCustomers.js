import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from "styled-components";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const validMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Container = styled.div`
  

  & form {
    text-align: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }
  & input {
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
    font-family: inherit;
  }
  & input:focus{
    background-color: aliceblue;
    outline: none;
  }
  & label {
    font-size: 1.3rem;
    color: beige;
    padding: 0.5rem;
    font-weight: 700;
  }
  @media screen and (max-width: 600px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;
    }
  }
`;

const AddCustomers = (props) => {
  // console.log(props)

  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const changeCustomerName = (e) => {
    e.preventDefault();
    setCustomerName(e.target.value);
    console.log(customerName);
  };
  const changheCustomerSurname = (e) => {
    setCustomerSurname(e.target.value);
  };
  const changheCustomerEmail = (e) => {
    setCustomerEmail(e.target.value);
  };

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addCustomerHandler = (e) => {
    e.preventDefault();

    if ( customerName.trim().length === 0 || customerSurname.trim().length === 0) {
      setError({
        title: "Invalid input! Write both your name and surname! 😲",
        message: "input must be > 0",
      });
      return;
    }
    if (customerEmail.trim().length === 0 || !customerEmail.toLowerCase().match(validMail)) {
      setError({
        title: "Invalid email! You have entered an invalid email address!! 😲",
        message: "input must be > 0 and 'xyz@domain.com '",
      });
      return;
    }


    const customer = {
      id: Math.random().toString(),
      name: customerName,
      lastName: customerSurname,
      email: customerEmail,
    };
    props.onAddCustomer(customer);
    console.log(customer);
    setCustomerName("");
    setCustomerSurname("");
    setCustomerEmail("");
  };

  return (
    <div>
      <Card>
        <Container className="container">
          <form onSubmit={addCustomerHandler}>
            <label>Name</label>
            <input
              type="text"
              value={customerName}
              onChange={changeCustomerName}
            />
            <label>Surname</label>
            <input
              type="text"
              value={customerSurname}
              onChange={changheCustomerSurname}
            />
            <label>Email</label>
            <input
              type="text"
              value={customerEmail}
              onChange={changheCustomerEmail}
            />
            <Button type="submit">Add</Button>
          </form>
        </Container>
      </Card>
      {error && (
        <ErrorModal
          errTitle={error.title}
          errMessage={error.message}
          onConfirm={errorHandler}
        />
      )}
    </div>
  );
};

export default AddCustomers;
