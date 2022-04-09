import { useState } from "react";
import { Card, Container } from "./styles";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Card>
        <p>
          To<span className="color-text">Do</span>List
        </p>
        <Link to={`List`}>
          <button>Open your list</button>
        </Link>
      </Card>
    </Container>
  );
}

export default Home;
