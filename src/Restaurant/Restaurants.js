import queryString from "query-string";
import { useState, useEffect } from "react";
import { Card, Nav, Pagination } from "react-bootstrap";
import Config from "../config/config";
import Loading from "../utils/Loading";
import Utils from "../utils/Utils";
import RestaurantNotFound from "./RestaurantNotFound";
import RestaurantsTable from "./RestaurantsTable";

export default function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  const [borough, setBorough] = useState("");
  const [loading, setLoading] = useState(true);

  let query = queryString.parse(props.query);
  useEffect(() => {
 
    let boroughQuery = query.borough
      ? `&borough=${
          Utils.fixCase(query.borough)
        }`
      : "";
    boroughQuery = encodeURI(boroughQuery);
    console.log(boroughQuery);
    setBorough(query.borough);
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        // appends borough that either is empty or the concatenated borough to query
        `${Config.uri}?page=${page}&perPage=${Config.perPage}${boroughQuery}`
      );
      const data = await response.json();
      setRestaurants(data);
      setLoading(false);
    }
    fetchData();
  }, [page, query.borough]);

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  let firstPage = page === 1;

  const previousPage = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (!loading) {
    if (restaurants && restaurants.length > 1) {
      return (
        <>
          <Card>
            <Card.Body>
              <Card.Title>Restaurant List</Card.Title>
              <Card.Text className="text-muted">
                Full list of restaurants. Optionally sorted by borough:{" "}
                {borough}
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
    } else {
      const errorMessage = `in this borough ${borough}`;
      return <RestaurantNotFound search={errorMessage} />;
    }
  } else {
    return <Loading />;
  }
}
