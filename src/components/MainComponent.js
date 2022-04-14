import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Component } from "react";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const DishWithId = () => {
      let { dishId } = useParams();
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
