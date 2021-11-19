import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;

  background: var(--whiteCity);
  margin: 5% auto;
  border-radius: 8px;
  box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.5);
  padding: 30px;


  h2 {
    font-size: 26px;
    text-align: center;
    border-radius: 2px;
    span {
      border-bottom: 4px solid var(--red);
      color: var(--red);
      border-radius: 2px;
    }
  }

  .logout {
    svg {
      font-size: 30px;
      color: red;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  font-size: 0.85rem;
  text-transform: uppercase;

  

  button {
    border-radius: 100px;
    width: 60%;
    margin-top: 50px;
  }
  ul {
    list-style: none;
    li {
      margin: 5px;
      padding: 5px;
      /* background: yellow; */
      color: var(--EletromagneticColor);
      span {
        font-weight: bold;
        /* color: var(--red); */
      }
    }
  }
`;

