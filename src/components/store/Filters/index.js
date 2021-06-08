import React from "react";
import { Row, Col } from "antd";
import { sections } from "src/utils/constants";
import { Switch } from "antd";

const Filters = ({ filters, setFilters }) => {
  return (
    <Col span={6}>
      <Row>
        {sections.map((section, index) => (
          <Col key={index} span={24}>
            <Switch
              checked={filters.includes(section)}
              onChange={checked => setFilters(section, checked)}
            />
            <span>{section}</span>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Filters;
