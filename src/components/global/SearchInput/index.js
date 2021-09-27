import React from "react";
import { Input } from 'antd';
import "./index.css"


const SearchInput = () => {


  return (
    <div className="search" >
      <i className="far fa-search"></i>
      <Input type="search" placeholder="Buscar" />
    </div>
  );
};

export default SearchInput;