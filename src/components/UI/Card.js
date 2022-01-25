import React from "react";  
import styled from "styled-components"
const Wrapper = styled.div`
    margin: 1.5rem auto;
    width: 89%;
    border-radius: 10px;
    padding: 1rem;
    background-color: whitesmoke;
    display: flex  ;
    flex-direction: column;
    justify-content: center;
  
`


const Card = (props) => {

    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Card;