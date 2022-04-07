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
    color: #000000bc;
    font-size: 1.6rem;
    font-weight: 800;

    .color-text {
      color: cyan;
      font-weight: 900;
    }
  }
  button {
    margin-top: 2rem;
    padding: 1.1rem;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #4700d8;
  }
`;
