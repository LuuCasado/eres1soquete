import React from "react";
import Card from "../../store/Card"
import { Col } from "antd";
import Slider from "react-slick";
import useStyles from "./styles"

const ProductCarousel = ({ products }) => {
  const classes = useStyles()

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  return (
    <>
      <h2>Nuevos Ingresos</h2>
      <Slider className={classes.slider} {...settings}>
        {products?.map(({ img, title, price, id }, index) => (
          <Col key={title + index} className={classes.product} span={8}>
            <Card img={img} title={title} price={price} id={id} />
          </Col>
        ))}
      </Slider>
    </>
  );
}

export default ProductCarousel