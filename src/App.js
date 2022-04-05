import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div>
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </Navbar>
        <Menu />
      </div>
    </div>
  );
}

export default App;
