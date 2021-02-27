import React from "react";
import { Row, Col } from "antd";
import { sections } from "../../../utils/constants";
import { Checkbox } from "antd";

const Filters = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <Col span={6}>
      <Row>
        {sections.map(section => (
          // eslint-disable-next-line react/jsx-key
          <Col span={24}>
            <Checkbox onChange={onChange}>{section}</Checkbox>
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
