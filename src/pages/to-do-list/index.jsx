import { useState } from "react";
import Form from "../../components/form";
import { Card, Container } from "./to-do-styles";

function List() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Card>
        <Form></Form>
      </Card>
    </Container>
  );
}

export default List;
