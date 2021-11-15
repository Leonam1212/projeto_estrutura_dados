
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url("https://i.pinimg.com/originals/d1/96/4f/d1964f7018231a4a640ec3445ca5e023.gif")
        no-repeat center,
      var(--black);
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
    from {
        opacity: 0.5;
        transform: translateX(-50px);
    }
    top {
        opacity: 1;
        transform: translateX(0px)
    };
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1.5s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    background: var(--whiteCity);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.35);
    button {
      width: 230px;
      border-radius: 100px;
    }
  }
  h1 {
    color: #b2bec3;
    margin-bottom: 32px;
    span {
      color: var(--red);
      opacity: 0.6;
    }
  }
  > div {
    margin-top: 16px;
  }
  p {
    margin-top: 20px;
    font-size: 14px;
    a {
      font-weight: bold;
      color: var(--red);
    }
  }
`;