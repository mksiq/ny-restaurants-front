import { Jumbotron, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Jumbotron className="text-center h4 mt-5">
      <div className="text-center">
        <div className="text-center h3 mt-2">
          <Spinner animation="border" variant="secondary" className="mr-3" />{" "}
          Loading.
        </div>
        <p>Wait a few seconds. If it takes too long please refresh.</p>
      </div>
    </Jumbotron>
  );
}
