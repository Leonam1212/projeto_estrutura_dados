import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 600px;
    background: var(--whiteCity);
    margin: 5% auto;
    border-radius: 8px;
    box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.5);
    padding: 20px;

    display: flex;
    justify-content: center;
    h2 {
        font-size: 26px;
        border-top: 4px solid var(--black);
        border-radius: 2px;
        span {
            border-bottom: 4px solid var(--red);
            color: var(--red);
            border-radius: 2px;
        }
    }
`