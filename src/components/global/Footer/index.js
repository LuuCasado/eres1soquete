import React from "react";
import { Layout as AntdLayout } from "antd";
import { Row, Col } from "antd";
import { Divider } from 'antd';
import "./index.css";


const { Content, Footer: AntdFooter } = AntdLayout;

const Footer = () => {
  return (
    <AntdFooter className="layout-footer">
      <Row>
        <Col span={6}>
          <div>
            <Divider plain>Envios</Divider>
          </div>
          <div>
            <img className="delivery-icon" src="/images/delivery.png" alt="Delivery" />
          </div>
          <img className="correo-logo" src="/images/correoargentino.png" alt="Correo Argentino" />
        </Col>
        <Col span={6}>
          <div>
            <Divider plain>Redes Sociales</Divider>
          </div>
          <a className="instagram-link" href="https://www.instagram.com/eres1soquete/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="facebook-link" href="https://www.facebook.com/eres1soquete" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
        </Col>
        <Col span={6}>
          <div>
            <Divider plain>Contacto</Divider>
          </div>
          <span className="phone">2236685193</span>
          <Divider className="vertical-divider" type="vertical" />
          <span className="email">eres1soquete@gmail.com</span>
        </Col>
        <Col span={6}>
          <div>
            <Divider plain>Medios de pago</Divider>
          </div>
          <div>
            <i className="fas fa-credit-card"></i>
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <img className="mercadopago-logo" src="/images/mercado-pago.png" alt="Mercado Pago" />
        </Col>
      </Row>
      <div className="copyright" >Copyright Eres 1 soquete - 2021. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos ingrese aquí </div>
    </AntdFooter>

  );
}


export default Footer;
