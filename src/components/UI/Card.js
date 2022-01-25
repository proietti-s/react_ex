import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #b1d4e5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  margin: 1rem;
`

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Card;
