import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RestaurantNotFound(props) {
  return (
    <>
      <Jumbotron>
        <div className="text-center">
          <p className="text-center h3 mt-2">
            No restaurants found {props.search}.
          </p>
          <p>Please retry.</p>
          <br />
          <Link to="/restaurants">
            <Button variant="secondary" size="sm">
              Clear
            </Button>
          </Link>
        </div>
      </Jumbotron>
    </>
  );
}
