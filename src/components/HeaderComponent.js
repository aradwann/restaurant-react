import React, { Component } from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { NavLink } from 'react-router-dom'

const required = (value) => (value ? undefined : 'Required')
// const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined)
// const minValue = (min) => (value) =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators =
//   (...validators) =>
//     (value) =>
//       validators.reduce(
//         (error, validator) => error || validator(value),
//         undefined
//       )

class Header extends Component {
  constructor (props) {
    super(props)

    this.toggleNav = this.toggleNav.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    }
  }

  toggleNav () {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleLogin (values) {
    this.toggleModal()
    alert(JSON.stringify(values, 0, 2))
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <Navbar dark expand="md">
            <NavbarBrand className="ml-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div id="jumbotron" className="p-5 mb-4 rounded-3">
          <div className="container-fluid py-5">
            <h1>Ristorante con Fusion</h1>
            <p>
              We take inspiration from the World&quot;s best cuisines, and create a
              unique fusion experience. Our lipsmacking creations will tickle
              your culinary senses!
            </p>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={this.handleLogin}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Field name="username" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Label htmlFor="username">Username</Label>
                          <Input
                            {...input}
                            type="text"
                            placeholder="Username"
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
                    <Field name="password" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input
                            {...input}
                            type="password"
                            placeholder="Password"
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
                  <FormGroup check>

                    <Field name="remember" component="input" type="checkbox" />
                    <Label check>Remember me</Label>
                  </FormGroup>
                  <Button
                    type="submit"
                    value="submit"
                    className="primary"
                    disabled={submitting}
                  >
                    Login
                  </Button>
                </form>
              )}
            />
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Header
