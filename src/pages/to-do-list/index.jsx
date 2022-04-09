import { useState } from "react";
import TodoForm from "../../components/todoform";
import TodoList from "../../components/todolist";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { Card, Container } from "./to-do-styles";

function List() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Card>
        <Link to="/">
          <IoMdArrowRoundBack />
        </Link>

        <TodoList />
      </Card>
    </Container>
  );
}

export default List;
