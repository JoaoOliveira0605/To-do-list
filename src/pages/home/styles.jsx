import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5rem 0;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 40rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  border-radius: 10px;

  p {
    color: #000000cc;
    font-size: 1.8rem;
    font-weight: 600;
    background-color: #ffffff;

    .color-text {
      color: #4700d8;
      font-weight: 900;
      background-color: #ffffff;
    }
  }

  a {
    margin: 1.5rem;
  }
  button {
    padding: 1.1rem;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #4700d8;
    cursor: pointer;
  }
`;
