import React from "react";

import Button from "../UI/Button";

import styled from "styled-components";

const Content = styled.div`
  background: white;
  margin: 10px auto;
  padding: 5px;
  width: 70%;
  border-radius: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
`;

const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  
  & Button {
    background: rgb(70,70,70);
    border: none;
    border-radius: 50%;
    color: white;
    padding: 8px;
    cursor: pointer;
    box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.5);
  }

  & Button:hover {
    background: rgba(20, 150, 180, 0.7);
    color: black;
    transform: scale(1.2);
    transition: transform 0.15s ease-in-out;
  }
`;

const CustomerItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <Content>
        {props.children}
      <Action>
        <Button onClick={deleteHandler}>X</Button>
      </Action>
    </Content>
  );
};

export default CustomerItem;
