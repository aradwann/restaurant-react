import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <div>
          <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </Navbar>
          <Menu dishes={this.state.dishes} />
        </div>
      </div>
    );
  }
}

export default App;
