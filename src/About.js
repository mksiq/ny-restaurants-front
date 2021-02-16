import { Card } from "react-bootstrap";

export default function About() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Maickel Siqueira</Card.Title>
        <Card.Text className="text-muted">Student at Seneca college.</Card.Text>
      </Card.Body>
      <Card.Footer>
        Check my other projects at my <a href="https://www.maickel.ca">portfolio</a> and <a href="https://github.com/mksiq">github</a>.
      </Card.Footer>
    </Card>
  );
}
