import styled from "styled-components"
export const Container = styled.button`
    background: ${props => props.redSchema ? "#eb4d4b" : "#5352ed"};
    color: #ecf0f1;
    height: 45px;
    border: 2px solid transparent;
    font-family: "Roboto Mono", monospace;
    margin-top: 16px;
    width:100%;
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.45);
    font-weight: bold;
    text-transform: uppercase;
    
    :hover {
        transform: translateY(3px);
        box-shadow: 0px 2px 4px rgba(0,0,0, 0.45);
        transition: 0.3s;
        opacity: 0.6;
    }
`