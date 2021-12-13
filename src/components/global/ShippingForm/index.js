import React from "react";
import Button from "src/components/global/Button";
import cn from "classnames";
import useStyles from "./styles"


const ShippingForm = ({ className }) => {
  const classes = useStyles()

  return (
    <div className={cn(classes.shipping, className)}>
      <div>
        <i className="far fa-truck" ></i>
        <p>Metodos de envio </p>
      </div>
      <div className={classes.inputContainer} >
        <input placeholder="Tu código postal" />
        <Button type="primary">
          Calcular
        </Button>
      </div>
      <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank">No se mi código postal</a>
    </div>
  )
};

export default ShippingForm;