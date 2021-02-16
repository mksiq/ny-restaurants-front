import { Container, Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function RestaurantsTable(props) {
  let history = useHistory();

  function maxTextWidth(text){
    if(text.length < 35){
      return text;
    }
    text = text.slice(0, 32) + "...";
    return text;
  }

  return (
    <>
      <Row className="p-2">
        {props.restaurants.map((restaurant, index) => (
          <Container
            key={index}
            data-id={restaurant._id}
            onClick={() => {
              history.push(`/restaurant/${restaurant._id}`);
            }}
            className="col-12 col-md-6 p-2"
          >
            <Container className="restaurant-card">
              <Container>
                <Row className="justify-content-between">
                  <h4 className="font-weight-bold">{maxTextWidth(restaurant.name)}</h4>
                  <span className="mr-0">{restaurant.borough}</span>
                </Row>
                <Row className="justify-content-between">
                  <h5 className="text-muted"><span className="mr-2 mb-1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg></span>{maxTextWidth(restaurant.cuisine)}</h5>
                  <span className="mr-0 text-muted"><span className="mr-2 mb-1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></span>
                    {restaurant.address.building} {restaurant.address.street}
                  </span>
                </Row>
              </Container>
            </Container>
          </Container>
        ))}
      </Row>
    </>
  );
}
