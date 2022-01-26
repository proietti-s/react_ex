// import React from "react";
import styled from "styled-components";
import Button from "./Button";

//-----------Styling--------------//

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
`;

const Modal = styled.div`
  position: fixed;
  background: rgba(150, 150, 150, 0.8);
  border-radius: 10px;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Header = styled.header`
  background: rgba(100, 200, 1200, 0.5);
  padding: 2px;
  text-align: center;

`;

const Content = styled.div`
    padding: 30px;
`

const Footer = styled.footer`
padding: 15px;
display: flex;
justify-content: flex-end;
`


//----------------component's logic------------------///

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop/>
      <Modal>
        <Header>
          <h2>{props.title}</h2>
        </Header>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Footer>
          <Button onClick={props.onConfirm}>Close</Button>
        </Footer>
      </Modal>
    </div>
  );
};

export default ErrorModal;
