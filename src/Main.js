import { Button, Card, Container } from "react-bootstrap";
import Config from "./config/config";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import RestaurantNotFound from "./Restaurant/RestaurantNotFound";
import Loading from "./utils/Loading";
import { useHistory } from "react-router-dom";

export default function Main() {
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  useEffect(() => {
    /**
     * Get a random restaurant between the first one and the 1000th one
     */
    async function fetchData() {
      setLoading(true);
      const randomPage = Math.trunc(Math.random() * 100 + 1);
      const response = await fetch(
        `${Config.uri}?page=${randomPage}&perPage=${Config.perPage}`
      );
      const data = await response.json();
      const randomIndex = Math.trunc(Math.random() * 10);
      if (data[randomIndex].hasOwnProperty("_id")) {
        setRandomRestaurant(data[randomIndex]);
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
          <Container>
            <Card>
              {/* Image from Thomas Habr, source: https://unsplash.com/photos/6NmnrAJPq7M */}
              <Card.Img
                variant="top"
                src="/background.jpg"
                alt="N.Y. skyline"
              />
              <Card.Body className="mid-background">
                <h2 className="text-center text-light">New York Restaurants</h2>
                <Card.Text className="text-center text-light">
                  An extensive list of restaurants in New York.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
          <br />
          <Container>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  {" "}
                  Feeling overwhelmed with so many choices? Try this random one:
                </Card.Title>
                <Card.Text className="d-flex justify-content-between">
                  <span>
                    <span className="h3 font-weight-bold">{randomRestaurant.name} </span>{" "}
                    <span className="text-muted">
                      located at
                      {randomRestaurant.address.building}{" "}
                      {randomRestaurant.address.street} -{" "}
                      {randomRestaurant.borough}
                    </span>
                  </span>
                  <Button
                    className="light-background"
                    onClick={() => {
                      history.push(`/restaurant/${randomRestaurant._id}`);
                    }}
                  >
                    More information
                  </Button>
                </Card.Text>

                <MapContainer
                  style={{ height: "200px" }}
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
              </Card.Body>
            </Card>
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
