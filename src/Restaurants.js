import queryString from "query-string";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Jumbotron,
  Nav,
  Pagination,
  Table,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Config from "./config/config";
import Loading from "./Loading";

export default function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  const [borough, setBorough] = useState("");
  let query = queryString.parse(props.query);
  let history = useHistory();
  useEffect(() => {
    // Fix the case of the query to match pattern in database: Only first letter is uppercase
    let boroughQuery = query.borough ? `&borough=${query.borough[0].toUpperCase() + query.borough.slice(1).toLowerCase() }` : "";
    setBorough(query.borough);
    async function fetchData() {
      const response = await fetch(
        // appends borough that either is empty or the concatenated borough to query
        `${Config.uri}?page=${page}&perPage=${Config.perPage}${boroughQuery}`
      );
      const data = await response.json();
      setRestaurants(data.restaurants);
    }
    fetchData();
  }, [props, page, query.borough]);

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  let firstPage = page === 1;

  const previousPage = (e) => {
    console.log(e);
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (restaurants && restaurants.length > 1) {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>Restaurant List</Card.Title>
            <Card.Text>
              Full list of restaurants. Optionally sorted by borough: {borough}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Borough</th>
              <th scope="col">Cuisine</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant, index) => (
              <tr
                key={index}
                data-id={restaurant._id}
                onClick={() => {
                  history.push(`/restaurant/${restaurant._id}`);
                }}
              >
                <td className="col-4">{restaurant.name}</td>
                <td className="col-3">
                  {restaurant.address.building} {restaurant.address.street}
                </td>
                <td className="col-2">{restaurant.borough}</td>
                <td className="col-4 text-nowrap">{restaurant.cuisine}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Nav
          aria-label="Restaurant navigation"
          className="justify-content-center"
        >
          <Pagination>
            <Pagination.Prev disabled={firstPage} onClick={previousPage} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={nextPage} />
          </Pagination>
        </Nav>
      </>
    );
  } else if (restaurants === undefined) {
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
  } else if (restaurants == null) {
    return (
      <Loading />
    );
  }
}
