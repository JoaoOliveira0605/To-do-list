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

  button {
    margin-top: 1rem;
    padding: 1.1rem;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #4700d8;
  }

  .todo-form {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    input {
      margin-right: 1.2rem;
      margin-top: 16px;
      text-align: center;
      border: 1px solid black;
      border-radius: 3px;
    }
  }

  .todo-row,
  .complete {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
    .icons {
      margin-left: 1rem;
      svg {
        font-size: 18px;
      }
    }
  }
`;
