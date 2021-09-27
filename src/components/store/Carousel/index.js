import React from "react";
import { Carousel as AntdCarousel } from "antd";

const Carousel = ({ className }) => {
  return (
    <AntdCarousel autoplay className={"contentStyle " + className}>
      <div>
        <h3 className="contentStyle">Soquetes</h3>
      </div>
      <div>
        <h3 className="contentStyle">Medias</h3>
      </div>
      <div>
        <h3 className="contentStyle">Bucaneras</h3>
      </div>
      <div>
        <h3 className="contentStyle">Boxers</h3>
      </div>
    </AntdCarousel>
  );
};

export default Carousel;
