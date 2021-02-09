import queryString from "query-string";
import { useState, useEffect } from "react";
import { Button, Nav, Table } from "react-bootstrap";
import Config from "./config/config";

export default function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let borough = query.borough ? `&borough=${query.borough}` : "" ; 
    async function fetchData() {
      console.log(borough)
      const response = await fetch(
        `${Config.uri}?page=${page}&perPage=${Config.perPage}${borough}`
      );
      const data = await response.json();
      setRestaurants(data.restaurants);
    }
    fetchData();
  }, [props, page]);

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const previousPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  let query = queryString.parse(props.query);
  console.log(query);
  if (restaurants) {
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
                <td className="col-4">{restaurant.cuisine}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Nav aria-label="Restaurant navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled" id="previous">
              <Button onClick={previousPage}>&laquo;</Button>{" "}
            </li>
            <li className="page-item">{page}</li>
            <li className="page-item" id="next">
              <Button onClick={nextPage}>&raquo;</Button>{" "}
            </li>
          </ul>
        </Nav>
      </>
    );
  } else {
    return <p className="text-center h4 mt-5">No restaurants found in this borough.</p>;
  }
}
