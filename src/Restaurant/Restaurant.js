import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import Config from "../config/config";
import Loading from "../utils/Loading";
import { Card, CardDeck, Container, Row } from "react-bootstrap";
import Utils from "../utils/Utils";
import RestaurantNotFound from "./RestaurantNotFound";

export default function Restaurant(props) {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let data;

      const response = await fetch(
        `${Config.uri}/${props.id}`
      );
      data = await response.json();
      if (data.hasOwnProperty("_id")) {
        setRestaurant(data);
      } else {
        setRestaurant(null);
      }
      setLoading(false);
    }
    fetchData();
  }, [props.id]);

  if (!loading) {
    if (restaurant) {
      return (
        <>
          <Card>
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text className="text-muted">
                {restaurant.address.building} {restaurant.address.street} -
                {restaurant.borough}
              </Card.Text>
            </Card.Body>
          </Card>
          <MapContainer
            style={{ height: "400px" }}
            center={[restaurant.address.coord[1], restaurant.address.coord[0]]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[
                restaurant.address.coord[1],
                restaurant.address.coord[0],
              ]}
            ></Marker>
          </MapContainer>
          <br />
          <h4>Ratings</h4>
          <hr />
          <Container fluid>
          <CardDeck>
              {restaurant.grades.map((grade, index) => (
                <Card key={index} className="mr-4">
                  <Card.Header>Grade: {grade.grade}</Card.Header>
                  <Card.Body>
                    Completed: {Utils.parseDate(grade.date)}
                  </Card.Body>
                </Card>
              ))}
         </CardDeck>
          </Container>
        </>
      );
    } else {
      const errorMessage = `with id ${props.id}`;
      return <RestaurantNotFound search={errorMessage} />;
    }
  } else {
    return <Loading />;
  }
}
