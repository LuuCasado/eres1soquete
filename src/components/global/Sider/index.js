import React, { useContext } from "react";
import ProductList from "src/components/cart/ProductList";
import { Divider } from 'antd';
import cn from "classnames";
import CartContext from 'src/storage/cart';
import useStyles from "./styles"


const Sider = ({ isSiderOpen, handleChange }) => {

  const { products, removeFromCart, addToCart } = useContext(CartContext);
  const classes = useStyles()

  return (
    <div className={cn(classes.siderBackground, { [classes.siderOpen]: isSiderOpen })}>
      <div className={classes.siderContent}>
        <Divider className={classes.siderTitle} >Mi carrito</Divider>
        <div className={cn({ [classes.siderEmptyContainer]: !products.length }, classes.siderProductListContainer)}>
          <ProductList
            products={products}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        </div>
        <i className="far fa-times-circle" onClick={() => handleChange(false)} />
      </div>
    </div>
  );
};

export default Sider;
