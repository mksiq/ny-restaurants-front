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
    setSearchString("")
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>New York Restaurants</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/restaurants/">
              <Nav.Link>Full List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
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
            <Button type="submit" variant="outline-success">
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
              <Route
                exact
                path="/"
                render={() => <Main />}
              />
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
