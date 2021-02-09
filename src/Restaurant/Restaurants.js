import queryString from "query-string";
import { useState, useEffect } from "react";
import { Card, Nav, Pagination, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Config from "../config/config";
import Loading from "../utils/Loading";
import RestaurantNotFound from "./RestaurantNotFound";
import RestaurantsTable from "./RestaurantsTable";

export default function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  const [borough, setBorough] = useState("");
  let query = queryString.parse(props.query);
  let history = useHistory();
  useEffect(() => {
    // Fix the case of the query to match pattern in database: Only first letter is uppercase
    let boroughQuery = query.borough
      ? `&borough=${
          query.borough[0].toUpperCase() + query.borough.slice(1).toLowerCase()
        }`
      : "";
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
          <RestaurantsTable restaurants={restaurants} />
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
    return <RestaurantNotFound />;
  } else if (restaurants == null) {
    return <Loading />;
  }
}
