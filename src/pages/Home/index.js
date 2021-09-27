import React from "react";
import Layout from "src/components/global/Layout";
import Carousel from "src/components/store/Carousel";
import "./index.css";


const Home = () => (

  <Layout selectedTab={"1"}>
    <div className="site-layout-content">
      <Carousel className="welcomeCarousel" />
    </div>
    <div>
      <img className="mayorista-img" src="https://www.soldeotono.com.ar/Content/assets/images/mayoristas/banner.jpg" />
    </div>
  </Layout>

);

export default Home;
