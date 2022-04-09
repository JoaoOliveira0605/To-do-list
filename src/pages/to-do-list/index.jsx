import { useState } from "react";
import TodoForm from "../../components/todoform";
import TodoList from "../../components/todolist";

import { Card, Container } from "./to-do-styles";

function List() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Card>
        <TodoList />
      </Card>
    </Container>
  );
}

export default List;
