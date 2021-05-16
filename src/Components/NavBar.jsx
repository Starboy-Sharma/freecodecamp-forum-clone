import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function NavBar() {
    return (
    <>
      <Row className="nav">
        <Col span={24}>
          <Title level={1} align="center"> <Link to="/" > freeCodeCamp (🔥) </Link> </Title>
        </Col>
      </Row>
    </>
    )
}
