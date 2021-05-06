import React from "react";
import ProductList from "../containers/ProductList";
import FloatingCart from "../containers/FloatingCart";
import Sort from "../containers/Sort";
import "./App.css";
import { connect } from "react-redux";
import { filterItems, sortItems } from "../actions";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Glyphicon } from "react-bootstrap-tools";
import Filtering from "../containers/Filtering";

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (id) => {
      console.log(id);
      dispatch(filterItems(id));
    },
    handleSort: (sortOrder) => {
      console.log(sortOrder);
      dispatch(sortItems(sortOrder));
    },
  };
};
export const App = ({ handleSelect, handleSort }) => {
  return (
    <Router>
      <>
        <Navbar expand="lg" collapseOnSelect>
          <Navbar.Brand href="/">Infy Shopping</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* dropdown for sorting*/}
              <NavDropdown
                eventKey={4}
                title="Sort By Price"
                id="basic-nav-dropdown-sort"
                onSelect={(e) => {
                  handleSort(e);
                }}
              >
                <LinkContainer to="/sort">
                  <NavDropdown.Item eventKey={"desc"}>
                    High To Low
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/sort">
                  <NavDropdown.Item eventKey={"asc"}>
                    Low To High
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* dropdown for filtering*/}
              <NavDropdown
                eventKey={3}
                title="Filter By Size"
                id="basic-nav-dropdown-filter"
                onSelect={(e) => {
                  handleSelect(e);
                }}
              >
                {/* {
              filterData.map(element=>(<><LinkContainer to="/filter"><NavDropdown.Item eventKey={element}>{element}</NavDropdown.Item> </LinkContainer></>))
           } */}

                <LinkContainer to="/filter">
                  <NavDropdown.Item eventKey={"XS"}>XS</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/filter">
                  <NavDropdown.Item eventKey={"S"}>S</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/filter">
                  <NavDropdown.Item eventKey={"M"}>M</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/filter">
                  <NavDropdown.Item eventKey={"L"}>L</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/filter">
                  <NavDropdown.Item eventKey={"XL"}>XL</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/filter">
                  <NavDropdown.Item eventKey={"XXL"}>XXL</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end">
              <LinkContainer to="/cart">
                <Nav.Item eventKey={1}>
                  <Glyphicon icon="shopping-cart" /> Cart
                </Nav.Item>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={"display-container"}>
          <Route exact path="/" component={ProductList} />
          <Route path="/filter" component={Filtering} />
          <Route path="/sort" component={Sort} />
          <Route path="/cart" component={FloatingCart} />
        </div>
      </>
    </Router>
  );
};

// App = connect(null,
//   mapDispatchToProps
// )(App)
// export { App };
export default connect(null, mapDispatchToProps)(App);
