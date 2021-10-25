import React from "react";
import { Carousel as AntdCarousel } from "antd";
import useStyles from "./styles"


const Carousel = ({ className }) => {
  const classes = useStyles()
  return (
    <AntdCarousel autoplay className={classes.contentStyle + className}>
      <div>
        <h3 className={classes.contentStyle}>Soquetes</h3>
      </div>
      <div>
        <h3 className={classes.contentStyle}>Medias</h3>
      </div>
      <div>
        <h3 className={classes.contentStyle}>Bucaneras</h3>
      </div>
      <div>
        <h3 className={classes.contentStyle}>Boxers</h3>
      </div>
    </AntdCarousel>
  );
};

export default Carousel;
