import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem 2rem;
  background-color: #ffc2e58f;
  margin: 1rem auto;
  width: 50%;
  border: none;
  border-radius: 20px;
  color: #1381a5;
`;

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Card;
