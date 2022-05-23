import React, { Component } from 'react'
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  FormGroup,
  Container,
  Label,
  Input,
  FormFeedback
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'

const required = (value) => (value ? undefined : 'Required')

class FeedbackForm extends Component {
  constructor (props) {
    super(props)
    this.handleFeedback = this.handleFeedback.bind(this)
  }

  handleFeedback (values) {
    this.props.postFeedback(
      values.firstname,
      values.lastname,
      values.email,
      values.telnum,
      values.agree,
      values.contactType,
      values.feedback
    )
    alert(JSON.stringify(values))
  }

  render () {
    return (
      <Form
        onSubmit={this.handleFeedback}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup row>
              <Field name="firstname" validate={required}>
                {({ input, meta }) => (
                  <Row>
                    <Label htmlFor="firstname" md={2}>
                      First Name
                    </Label>
                    <Col md={10}>
                      <Input
                        {...input}
                        type="text"
                        placeholder="First Name"
                        valid={!meta.error}
                        invalid={meta.error && meta.touched}
                      />
                      {meta.error && meta.touched && (
                        <FormFeedback>{meta.error}</FormFeedback>
                      )}
                    </Col>
                  </Row>
                )}
              </Field>
            </FormGroup>
            <FormGroup row>
              <Field name="lastname" validate={required}>
                {({ input, meta }) => (
                  <Row>
                    <Label htmlFor="lastname" md={2}>
                      Last Name
                    </Label>
                    <Col md={10}>
                      <Input
                        {...input}
                        type="text"
                        placeholder="Last Name"
                        valid={!meta.error}
                        invalid={meta.error && meta.touched}
                      />
                      {meta.error && meta.touched && (
                        <FormFeedback>{meta.error}</FormFeedback>
                      )}
                    </Col>
                  </Row>
                )}
              </Field>
            </FormGroup>
            <FormGroup row>
              <Field name="telnum" validate={required}>
                {({ input, meta }) => (
                  <Row>
                    <Label htmlFor="telnum" md={2}>
                      Tel Num
                    </Label>
                    <Col md={10}>
                      <Input
                        {...input}
                        type="tel"
                        placeholder="Tel. Number"
                        valid={!meta.error}
                        invalid={meta.error && meta.touched}
                      />
                      {meta.error && meta.touched && (
                        <FormFeedback>{meta.error}</FormFeedback>
                      )}
                    </Col>
                  </Row>
                )}
              </Field>
            </FormGroup>
            <FormGroup row>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <Row>
                    <Label htmlFor="email" md={2}>
                      Tel Num
                    </Label>
                    <Col md={10}>
                      <Input
                        {...input}
                        type="email"
                        placeholder="Email"
                        valid={!meta.error}
                        invalid={meta.error && meta.touched}
                      />
                      {meta.error && meta.touched && (
                        <FormFeedback>{meta.error}</FormFeedback>
                      )}
                    </Col>
                  </Row>
                )}
              </Field>
            </FormGroup>
            <FormGroup row>
              <Row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Field name="agree" component="input" type="checkbox" />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Field name="contactType">
                    {({ input, meta }) => (
                      <Input {...input} type="select">
                        <option>Tel.</option>
                        <option>Email</option>
                      </Input>
                    )}
                  </Field>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup row>
              <Field name="feedback" validate={required}>
                {({ input, meta }) => (
                  <Row>
                    <Label htmlFor="feedback" md={2}>
                      Feedback
                    </Label>
                    <Col md={10}>
                      <Input
                        {...input}
                        type="textarea"
                        placeholder="Feedback"
                        valid={!meta.error}
                        invalid={meta.error && meta.touched}
                      />
                      {meta.error && meta.touched && (
                        <FormFeedback>{meta.error}</FormFeedback>
                      )}
                    </Col>
                  </Row>
                )}
              </Field>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button
                  type="submit"
                  value="submit"
                  color="primary"
                  disabled={submitting}
                >
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </form>
        )}
      />
    )
  }
}

function Contact (props) {
  return (
    <Container>
      <Row>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <Col>
          <h3>Contact Us</h3>
          <hr />
        </Col>
      </Row>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{' '}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info" href="skype:">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <FeedbackForm postFeedback={props.postFeedback} />
        </div>
      </div>
    </Container>
  )
}

export default Contact
