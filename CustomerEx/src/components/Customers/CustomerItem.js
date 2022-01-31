import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    transform: rotate(10deg);
    transform: scale(1.2);
  }
`;

const CustomerItem = (props) => {
    
  const deleteCustomerHandler = () => {
    console.log(props);
    props.onDeleteCustomer(props.id)
    
}
    return (
    
       
          <Card key={Math.random().toString()}>
            <Content>
              <div>
                  <p>
                    <b>Name:</b> {props.name}
                  </p>
                  <p>
                    <b>Surname:</b> {props.lastName}
                  </p>
                  <p>
                    <b>Email:</b> {props.email}
                  </p>
              </div>
            <div><Btn onClick={deleteCustomerHandler}>🗑</Btn></div>
            </Content>
          </Card>
      
    
    );
  
};

export default CustomerItem;
