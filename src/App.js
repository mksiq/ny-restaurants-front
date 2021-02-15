/* eslint-disable require-jsdoc */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Navbar,
  Nav,
  Container,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Switch, Route, useHistory } from "react-router-dom";
import About from "./About";
import Restaurant from "./Restaurant/Restaurant";
import Restaurants from "./Restaurant/Restaurants";
import NotFound from "./NotFound";
import Main from "./Main";

function App() {
  const [searchString, setSearchString] = useState("");
  let history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/restaurants?borough=${encodeURI(searchString)}`);
    setSearchString("");
  }
  return (
    <>
      <Navbar className="dark-background" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="text-light">New York Restaurants</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <LinkContainer to="/restaurants/">
              <Nav.Link className="text-light">Full List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-light">About</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form onSubmit={handleSubmit} inline>
            <FormControl
              type="text"
              placeholder="Borough"
              className="mr-sm-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <Button type="submit" variant="outline-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                className="mr-2 mb-1"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>{" "}
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/" render={() => <Main />} />
              <Route exact path="/about" render={() => <About />} />
              <Route
                path="/restaurants"
                render={(props) => (
                  <Restaurants query={props.location.search} />
                )}
              />
              <Route
                path="/restaurant/:id"
                render={(props) => <Restaurant id={props.match.params.id} />}
              />
              <Route render={() => <NotFound />} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
