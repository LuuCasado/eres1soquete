import React from "react";
import { Row, Col } from "antd";
import { sections } from "src/utils/constants";
import Checkbox from "src/components/global/Checkbox";
import useStyles from "./styles"

const Filters = ({ filters, setFilters }) => {
  const classes = useStyles()
  return (
    <Col span={6} className={classes.filters}>
      <Row>
        {sections.map((section, index) => (
          <Col key={index} span={24}>

            <Checkbox
              checked={filters.includes(section)}
              onChange={({ target: { checked } }) => setFilters(section, checked)}
              label={section}
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default Filters;
