import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { Button, Row, Col } from "antd";

import { SubForumContext } from "../../contexts/SubForumContext";

export default function Forum() {
  const { id, forum } = useParams();
  const [subForums, setSubForums] = useContext(SubForumContext);

  console.log(subForums);

  return (
    <Row className="container">
      <Col span={24}>
        <Button
          size="large"
          className="btn"
          style={{ backgroundColor: "yellow" }}
        >
          {forum}
        </Button>
        <Button size="large" className="btn btn-latest">
          Latest
        </Button>
        <Button size="large" className="btn btn-top">
          Top
        </Button>
      </Col>
    </Row>
  );
}
