import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(100, 200, 1200, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
`;

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Card;