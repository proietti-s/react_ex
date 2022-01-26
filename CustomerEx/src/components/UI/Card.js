import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem 2rem;
  background-color: #bdc0e8;
  margin: 1rem auto; 
  width: 50%;
  border: none;
  border-radius: 20px;
  
`

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Card;
