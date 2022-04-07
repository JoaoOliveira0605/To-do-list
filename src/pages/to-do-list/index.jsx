import { useState } from "react";
import { Card, Container } from "./styles";

function List() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Card>
        <p>
          To<span className="color-text">Do</span>List
        </p>
        <button>Open yourss list</button>
      </Card>
    </Container>
  );
}

export default List;
