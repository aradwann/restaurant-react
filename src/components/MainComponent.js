import Menu from './MenuComponent'
import React, { Component } from 'react'
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import withRouter from '../shared/withRouter'
import { connect } from 'react-redux'
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  postFeedback
} from '../redux/ActionCreators'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const mapStatetoProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes())
  },
  fetchComments: () => {
    dispatch(fetchComments())
  },
  fetchPromos: () => {
    dispatch(fetchPromos())
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders())
  },
  postFeedback: (
    firstname,
    lastname,
    email,
    telnum,
    agree,
    contactType,
    feedback
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        email,
        telnum,
        agree,
        contactType,
        feedback
      )
    )
})

class Main extends Component {
  componentDidMount () {
    this.props.fetchDishes()
    this.props.fetchComments()
    this.props.fetchPromos()
    this.props.fetchLeaders()
  }

  render () {
    const DishWithId = () => {
      const { dishId } = useParams()
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Routes>
              <Route
                path="/home"
                element={
                  <Home
                    dish={
                      this.props.dishes.dishes.filter(
                        (dish) => dish.featured
                      )[0]
                    }
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={
                      this.props.promotions.promotions.filter(
                        (promotion) => promotion.featured
                      )[0]
                    }
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={
                      this.props.leaders.leaders.filter(
                        (leader) => leader.featured
                      )[0]
                    }
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                  />
                }
              />
              <Route path="/menu/:dishId" element={<DishWithId />} />
              <Route
                path="/menu"
                element={<Menu dishes={this.props.dishes} />}
              />
              <Route
                path="/contactus"
                element={<Contact postFeedback={this.props.postFeedback} />}
              />
              <Route
                path="/aboutus"
                element={<About leaders={this.props.leaders} />}
              />
              <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main))
