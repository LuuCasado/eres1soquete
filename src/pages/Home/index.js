import React from "react";
import Layout from "src/components/global/Layout";
import Carousel from "src/components/home/Carousel";
import AboutServices from "src/components/home/AboutServices";
import Tags from "src/components/home/Tags";
import PrincipalCategories from "src/components/home/PrincipalCategories";
import ProductCarousel from "src/components/home/ProductCarousel";
import useProductList from "src/hooks/useProductList"
import useStyles from "./styles"


const Home = () => {
  const { products } = useProductList();
  const classes = useStyles()

  return (
    <Layout selectedTab={"1"}>
      <Carousel />
      <AboutServices />
      <Tags />
      <PrincipalCategories />
      <ProductCarousel products={products} />
      <div>
        <img className={classes.mayoristaImg} src="https://www.soldeotono.com.ar/Content/assets/images/mayoristas/banner.jpg" />
      </div>
    </Layout>

  );
}

export default Home;
