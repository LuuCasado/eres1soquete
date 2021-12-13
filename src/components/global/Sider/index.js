import React, { useContext, useState } from "react";
import ProductList from "src/components/cart/ProductList";
import { Divider } from 'antd';
import ShippingForm from "src/components/global/ShippingForm";
import Button from "src/components/global/Button";
import cn from "classnames";
import CartContext from 'src/storage/cart';
import useStyles from "./styles"


const Sider = ({ isSiderOpen, handleChange }) => {

  const classes = useStyles()
  const { products, removeFromCart, addToCart } = useContext(CartContext);
  const totalPrice = products.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  const [isShippingCostVisible, setIsShippingCostVisible] = useState(false);


  return (
    <div className={cn(classes.siderBackground, { [classes.siderOpen]: isSiderOpen })} onClick={(event) => {
      event.stopPropagation();
      handleChange(false);
    }}>
      <div onClick={e => e.stopPropagation()} className={classes.siderContent}>
        <Divider className={classes.siderTitle} >Mi carrito</Divider>
        <div className={cn({ [classes.siderEmptyContainer]: !products.length }, classes.siderProductListContainer)}>
          <ProductList
            className={cn(isShippingCostVisible ? classes.shippingFormOpen : classes.productList)}
            products={products}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
          {!!products.length && (
            <>
              <Divider />
              <div className={classes.siderFooter} >
                <div>
                  <p>Total: </p>
                  <p>${totalPrice}</p>
                </div>
                <Button type="primary">
                  Iniciar compra
                </Button>
                <Divider />
                {isShippingCostVisible ? <ShippingForm /> : <Button type="link" onClick={() => setIsShippingCostVisible(true)} >Costos de envío</Button>}
              </div>
            </>
          )}

        </div>
        <i className="far fa-times-circle" onClick={() => handleChange(false)} />
      </div>
    </div>
  );
};

export default Sider;
