import React from "react";
import { navigate } from "gatsby";
import { buildQueryUrl } from "src/utils/helpers"
import useStyles from "./styles"

const PrincipalCategories = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <div>
        <div>
          <h3>SOQUETES</h3>
          <button onClick={() => navigate(buildQueryUrl("/Store", { section: "Soquetes" }))} >QUIERO MIS SOQUETES</button>
        </div>
      </div>
      <div>
        <div>
          <h3>MEDIAS</h3>
          <button onClick={() => navigate(buildQueryUrl("/Store", { section: "Medias" }))}>QUIERO MIS MEDIAS</button>
        </div>
      </div>
    </div>
  );
}

export default PrincipalCategories;