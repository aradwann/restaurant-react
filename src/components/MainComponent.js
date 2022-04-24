import Menu from "./MenuComponent";
import { Component } from "react";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import withRouter from "../shared/withRouter";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators";

const mapStatetoProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

class Main extends Component {
  render() {
    const DishWithId = () => {
      let { dishId } = useParams();
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(dishId, 10)
          )}
          addComment={this.props.addComment}
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
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.props.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/aboutus"
            element={<About leaders={this.props.leaders} />}
          />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));
