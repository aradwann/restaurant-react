import { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  List,
  Container,
} from "reactstrap";

class DishdetailComponent extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  renderComments(comments) {
    if (comments != null) {
      const commentsLi = comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.comment}
            <br />
            --{comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
            <br />
            <br />
          </li>
        );
      });
      return (
        <Container>
          <h4>Comments</h4>
          <List type="unstyled">{commentsLi}</List>
        </Container>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    if (this.props.dish != null) {
      return (
        <Container>
          <Row>
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </Row>
        </Container>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishdetailComponent;
