import styled from "styled-components"

const Btn = styled.button`
    padding: 0.5rem 2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: azure;
    margin: 1 1rem
`
const Button = (props) => {



    return <Btn type={props.type} onClick={props.onClick}>{props.children}</Btn>
}

export default Button
