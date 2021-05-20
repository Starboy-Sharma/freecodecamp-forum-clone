import React, { useState, useEffect, useContext } from "react";
import { Row, Spin, Col, Card, Typography } from "antd";
import { Link } from "react-router-dom";

import { getForums } from "../Services/Forums";
const { Title } = Typography;

import { SubForumContext } from "../contexts/SubForumContext";

const Loader = () => {
  return (
    <Row
      type="flex"
      align="middle"
      style={{ height: "90vh", justifyContent: "center" }}
    >
      <Spin size="large" />
    </Row>
  );
};

const SubForums = () => {
  const [subForums, setSubForums] = useContext(SubForumContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getForums()
      .then((forums) => {
        setSubForums(forums);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Row className="container">
          <Col lg={18} md={16} sm={14} xs={24} className="forum">
            {subForums.map((forum) => (
              <Link to={`${forum.name}/${forum.id}`} key={forum.id}>
                <Card
                  title={forum.name}
                  style={{ borderLeft: `5px solid ${forum.color}` }}
                  bordered={false}
                >
                  <p> {forum.description} </p>
                </Card>{" "}
              </Link>
            ))}
          </Col>
          <Col lg={6} md={8} sm={10} xs={24}>
            {" "}
            <Title level={3} style={{ color: "#dddee0", marginLeft: "10px" }}>
              Latest Posts
            </Title>{" "}
          </Col>
        </Row>
      )}
    </>
  );
};

export default SubForums;
