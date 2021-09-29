import React from "react";
import Layout from "src/components/global/Layout";
import Carousel from "src/components/store/Carousel";
import useStyles from "./styles"


const Home = () => {
  const classes = useStyles()
  return (
    <Layout selectedTab={"1"}>
      <Carousel className={classes.welcomeCarousel} />
      <div>
        <img className={classes.mayoristaImg} src="https://www.soldeotono.com.ar/Content/assets/images/mayoristas/banner.jpg" />
      </div>
    </Layout>

  );
}

export default Home;
