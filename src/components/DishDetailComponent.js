import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  List,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";
import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleComment(event) {
    this.toggleModal();
    alert(
      `This rating: ${this.name.value} name: ${this.name.value}  comment ${this.comment.value}`
    );
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleComment}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input type="select" name="rating" value={this.state.rating}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">Comment</Label>
                <Input
                  type="textarea"
                  id="comment"
                  name="comment"
                  rows="6"
                  value={this.state.comment}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleComment}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
      </>
    );
  }
}

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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
        <CommentForm />
      </Container>
    );
  } else {
    return <div></div>;
  }
}
function DishDetail(props) {
  if (props.dish != null) {
    return (
      <Container>
        <Row>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </Row>
        <Row>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
