import { Card, Container, Row } from "react-bootstrap";
import Config from "./config/config";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import RestaurantNotFound from "./Restaurant/RestaurantNotFound";
import Loading from "./utils/Loading";
import Utils from "./utils/Utils";

export default function Main() {
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const randomPage = Math.trunc(Math.random() * 100 + 1);
      const response = await fetch(
        `${Config.uri}?page=${randomPage}&perPage=${Config.perPage}`
      );
      const data = await response.json();
      const randomIndex = Math.trunc(Math.random() * 10);
      if (data[randomIndex].hasOwnProperty("_id")) {
        setRandomRestaurant(data[randomIndex]); // Math.trunc(Math.random() * 10)
      } else {
        setRandomRestaurant(null);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (!loading) {
    if (randomRestaurant) {
      return (
        <>
          <Card>
            <Card.Body>
              <Card.Title>{randomRestaurant.name}</Card.Title>
              <Card.Text className="text-muted">
                {randomRestaurant.address.building}{" "}
                {randomRestaurant.address.street} - {randomRestaurant.borough}
              </Card.Text>
            </Card.Body>
          </Card>
          <MapContainer
            style={{ height: "400px" }}
            center={[
              randomRestaurant.address.coord[1],
              randomRestaurant.address.coord[0],
            ]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[
                randomRestaurant.address.coord[1],
                randomRestaurant.address.coord[0],
              ]}
            ></Marker>
          </MapContainer>
          <br />
          <h4>Ratings</h4>
          <hr />
          <Container fluid>
            <Row className="justify-content-between">
              {randomRestaurant.grades.map((grade, index) => (
                <Card key={index} className="mr-4">
                  <Card.Header>Grade: {grade.grade}</Card.Header>
                  <Card.Body>
                    Completed: {Utils.parseDate(grade.date)}
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Container>
        </>
      );
    } else {
      const errorMessage = `Sorry. Something went wrong.`;
      return <RestaurantNotFound search={errorMessage} />;
    }
  } else {
    return <Loading />;
  }
}
