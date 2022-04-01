import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
