import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RestaurantNotFound() {
  return (
    <>
      <Jumbotron>
        <div className="text-center">
          <p className="text-center h3 mt-2">
            No restaurants found in this borough.
          </p>
          <p>Please type another borough.</p>
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
