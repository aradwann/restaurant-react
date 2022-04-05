import React, { Component } from "react";
import { Container, List, Row } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image: "assets/images/zucchipakoda.png",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "assets/images/vadonut.png",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "assets/images/elaicheesecake.png",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div tag="li" key={dish.id} className="d-flex mt-5">
          <div class="flex-shrink-0">
            <img src={dish.image} alt={dish.name} />
          </div>
          <div class="flex-grow-1 ms-3 ml-5">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        </div>
      );
    });

    return (
      <Container>
        <Row>
          <List type="unstyled">{menu}</List>
        </Row>
      </Container>
    );
  }
}

export default Menu;
