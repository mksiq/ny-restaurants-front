import queryString from "query-string";
import { useState, useEffect } from "react";
import { Button, Nav, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Config from "./config/config";

export default function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  let query = queryString.parse(props.query);
  useEffect(() => {
    let borough = query.borough ? `&borough=${query.borough}` : "";
    async function fetchData() {
      console.log(borough);
      const response = await fetch(
        `${Config.uri}?page=${page}&perPage=${Config.perPage}${borough}`
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

  console.log(query);
  if (restaurants && restaurants.length > 1) {
    return (
      <>
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
              <tr key={index} data-id={restaurant._id}>
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
      <div className="text-center">
        <p className="text-center h4 mt-5">
          No restaurants found in this borough.
        </p>
        <br />
        <br />
        <Link to="/restaurants">
          <Button>Remove Filter</Button>
        </Link>        
      </div>
    );
  } else if (restaurants == null) {
    return <p className="text-center h4 mt-5">Loading Restaurants.</p>;
  }
}
