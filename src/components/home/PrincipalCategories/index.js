import React from "react";
import Button from "src/components/global/Button";
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
          <Button type="secondary" onClick={() => navigate(buildQueryUrl("/Store", { section: "Soquetes" }))} >QUIERO MIS SOQUETES</Button>
        </div>
      </div>
      <div>
        <div>
          <h3>MEDIAS</h3>
          <Button type="secondary" onClick={() => navigate(buildQueryUrl("/Store", { section: "Medias" }))}>QUIERO MIS MEDIAS</Button>
        </div>
      </div>
    </div>
  );
}

export default PrincipalCategories;