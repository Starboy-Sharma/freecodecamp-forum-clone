import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

export default function NavBar() {
    return (
    <>
      <Row className="nav">
        <Col span={24}>
          <Title level={1} align="center"> freeCodeCamp (🔥) </Title>
        </Col>
      </Row>
    </>
    )
}
