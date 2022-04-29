import React from "react";
import { Col, Spinner } from "reactstrap";

export const Loading = (props) => {
  return (
    <Col>
      <Spinner color="primary" type="grow">
        Loading...
      </Spinner>
    </Col>
  );
};
