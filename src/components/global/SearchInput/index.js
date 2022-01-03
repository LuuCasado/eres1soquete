import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { buildQueryUrl } from "src/utils/helpers"
import { navigate } from "gatsby";
import { Input } from 'antd';
import useStyles from "./styles"

const SearchInput = () => {
  const classes = useStyles()
  const [searchInput, setSearchInput] = useState("")

  const debounceFunction = useCallback(debounce(
    (inputValue) => {
      const url = buildQueryUrl("/Store", { search: inputValue })
      navigate(url)
    },
    1000,
    {
      trailing: true,
    }
  ),
    []
  )
  const onSearch = (value) => {
    setSearchInput(value);
    debounceFunction(value);

  }

  return (
    <div className={classes.search} >
      <i className="far fa-search"></i>
      <Input type="search" placeholder="Buscar" onChange={({ target: { value } }) => onSearch(value)} value={searchInput} />
    </div>
  );
};

export default SearchInput;