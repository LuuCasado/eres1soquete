import React from "react";
import { Row, Col } from "antd";
import { sections } from "src/utils/constants";
import useStyles from "./styles"

const Tags = () => {
  const classes = useStyles()
  return (
    <Col>
      <h1 className={classes.title} >CATEGORIAS PRINCIPALES</h1>
      <Row className={classes.tags} >
        {sections.map((section, index) => (
          <div className="section-tag" >{section}</div>
        ))}
      </Row>
    </Col>
  );
}

export default Tags;
