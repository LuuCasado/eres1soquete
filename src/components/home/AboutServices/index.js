import React from "react";
import { Divider } from 'antd';
import { Row, Col } from "antd";
import useStyles from "./styles"


const AboutServices = () => {
  const classes = useStyles()
  return (
    <Row className={classes.container} >
      <Col className={classes.serviceContainer} span={8}>
        <div className={classes.service}>
          <i className="far fa-truck" ></i>
          <span className={classes.title} > ENVIOS A TODO EL PAIS </span>
          <span> por Correo Argentino </span>
        </div>
        <Divider className="vertical-divider" type="vertical" />
      </Col>
      <Col className={classes.serviceContainer} span={8}>
        <div className={classes.service}>
          <i className="far fa-credit-card"></i>
          <span className={classes.title}> TODOS LOS MEDIOS DE PAGO </span>
          <span> Efectivo, Transferencia, Mercado Pago </span>
        </div>
        <Divider className="vertical-divider" type="vertical" />
      </Col>
      <Col span={8}>
        <div className={classes.service}>
          <i className="far fa-box-check"></i>
          <span className={classes.title}> HACE TU PEDIDO POR ENCARGUE </span>
          <span> Lo pedis, te lo traemos! </span>
        </div>
      </Col>
    </Row>
  );
};

export default AboutServices;
