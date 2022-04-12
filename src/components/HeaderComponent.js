import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </Navbar>
        <div id="jumbotron" class="p-5 mb-4 rounded-3">
          <div class="container-fluid py-5">
            <h1>Ristorante con Fusion</h1>
            <p>
              We take inspiration from the World's best cuisines, and create a
              unique fusion experience. Our lipsmacking creations will tickle
              your culinary senses!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
