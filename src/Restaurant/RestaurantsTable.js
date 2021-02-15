import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function RestaurantsTable(props) {
  let history = useHistory();
  return (
    <Table striped bordered hover className="white-background">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Borough</th>
        <th scope="col">Cuisine</th>
      </tr>
    </thead>
    <tbody>
      {props.restaurants.map((restaurant, index) => (
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
  );
}