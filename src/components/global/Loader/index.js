import React from "react";
import cn from 'classnames'
import "antd/dist/antd.css";
import "./index.css";

const Ouroboro = ({ color: background }) => <div className={cn('lds-ouroboro')}>
  <span className={cn('left')}>
    <span className={cn('anim')} style={{ background }}></span>
  </span>
  <span className={cn('right')}>
    <span className={cn('anim')} style={{ background }}></span>
  </span>
</div>


export default Ouroboro;
