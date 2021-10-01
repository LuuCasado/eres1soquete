import React from "react";
import { Input } from 'antd';
import useStyles from "./styles"


const SearchInput = () => {
  const classes = useStyles()


  return (
    <div className={classes.search} >
      <i className="far fa-search"></i>
      <Input type="search" placeholder="Buscar" />
    </div>
  );
};

export default SearchInput;