import React from "react";
import { Row, Col } from "antd";
import { sections } from "src/utils/constants";
import { buildQueryUrl } from "src/utils/helpers"
import { Link } from "gatsby";
import useStyles from "./styles"

const Tags = () => {
  const classes = useStyles()
  return (
    <Col>
      <h1 className={classes.title} >CATEGORIAS PRINCIPALES</h1>
      <Row className={classes.tags} >
        {sections.map((section) => (
          <Link className={classes.sectionTag} to={buildQueryUrl("/Store", { section })}>{section}</Link>
        ))}
      </Row>
    </Col>
  );
}

export default Tags;