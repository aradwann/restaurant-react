import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'
type Dish = {
  id:number,
  image:string,
  name:string
}

function RenderMenuItem ({ dish }: any) {
  return (
    <Card key={dish.id}>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  )
}

const Menu = (props: { dishes: { dishes: Dish[]; isLoading: any; errMess: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined } }) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    )
  })

  if (props.dishes.isLoading) {
    return (
      <Container>
        <Row>
          <Loading />
        </Row>
      </Container>
    )
  } else if (props.dishes.errMess) {
    return (
      <Container>
        <Row>
          <h4>{props.dishes.errMess}</h4>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container>
        <Row>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <Col>
            <h3>Menu</h3>
            <hr />
          </Col>
        </Row>
        <Row>{menu}</Row>
      </Container>
    )
  }
}

export default Menu
