import React from "react";
import { Row, Col } from "antd";
import { sections } from "src/utils/constants";
import { Checkbox } from "antd";

const Filters = ({ filters, setFilters }) => {
  return (
    <Col span={6}>
      <Row>
        {sections.map((section, index) => (
          <Col key={index} span={24}>
            <Checkbox
              checked={filters.includes(section)}
              onChange={e => setFilters(section, e.target.checked)}
            >
              {section}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Filters;

/*
      <p>filter is {counts[section] ? "on" : "off"}</p>/*     
      <button
            onClick={() =>
              setCounts({
                ...counts,
                [section]: !counts[section] ? true : false,
              })
            }
          >
            {section}
          </button>*/
