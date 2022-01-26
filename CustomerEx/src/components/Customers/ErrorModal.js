import React from "react";
import Button from "../UI/Button";

import styled from "styled-components";

const ErrModal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 1rem;
  box-shadow: 0 2px 10px #a4a4a4c3;
  border-radius: 10px;
  text-align: center;

  & h2,
  b {
    color: #d05e5e;
    font-size: 1rem;
  }
  & h3,
  p {
    color: #212121;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .ErrModal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;


const ErrorModal = (props) => {
  return (
    <div>
      <BackDrop onClick={props.onConfirm}>
        <ErrModal>
          <h2>
            Error: <p> {props.errTitle}</p>{" "}
          </h2>

          <p>
            <b>Message: </b>
            {props.errMessage}
          </p>
          <Button onClick={props.onConfirm}>OK</Button>
        </ErrModal>
      </BackDrop>
    </div>
  );
};

export default ErrorModal;
