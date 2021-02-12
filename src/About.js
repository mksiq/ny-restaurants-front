import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Maickel Siqueira</Card.Title>
        <Card.Text className="text-muted">
          Student at Seneca college.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        Check my other projects at my portfolio: <a href="https://www.maickel.ca">website</a>
      </Card.Footer>
    </Card>
  );
}
