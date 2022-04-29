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
  FormFeedback,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Form, Field } from "react-final-form";

import { Link } from "react-router-dom";
import React, { Component } from "react";

import { Loading } from "./LoadingComponent";

const required = (value) => (value ? undefined : "Required");

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

  handleComment(values) {
    this.toggleModal();
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={this.handleComment}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Field name="rating" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Label htmlFor="rating">Rating</Label>
                          <Input
                            {...input}
                            type="select"
                            valid={!meta.error}
                            invalid={meta.error && meta.touched}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                          {meta.error && meta.touched && (
                            <FormFeedback>{meta.error}</FormFeedback>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>

                  <FormGroup>
                    <Field name="author" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Label htmlFor="author">Your Name</Label>
                          <Input
                            {...input}
                            type="text"
                            placeholder="Your Name"
                            valid={!meta.error}
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <FormFeedback>{meta.error}</FormFeedback>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Field name="comment" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Label htmlFor="comment">Comment</Label>
                          <Input
                            {...input}
                            type="textarea"
                            placeholder="Comment"
                            valid={!meta.error}
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <FormFeedback>{meta.error}</FormFeedback>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                  <Button
                    type="submit"
                    value="submit"
                    className="primary"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </form>
              )}
            />
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
      </div>
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

function RenderComments({ comments, addComment, dishId }) {
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
        <CommentForm addComment={addComment} dishId={dishId} />
      </Container>
    );
  } else {
    return <div></div>;
  }
}
function DishDetail(props) {
  if (props.isLoading) {
    return (
      <Container>
        <Row>
          <Loading />
        </Row>
      </Container>
    );
  } else if (props.errMess) {
    return (
      <Container>
        <Row>
          <h4>{props.errMess}</h4>
        </Row>
      </Container>
    );
  } else if (props.dish != null) {
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
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
          </div>
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
