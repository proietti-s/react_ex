import React from "react";

import Button from "../UI/Button";

import styled from "styled-components";

const Content = styled.div`
  background: white;
  margin: 5px auto;
  padding: 5px;
  width: 70%;
  border-radius: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
  }

  & Button:hover {
    background: rgb(200,105,100);
    color: black;
    transform: scale(1.1);
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
