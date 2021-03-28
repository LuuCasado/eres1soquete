import React from "react";
import Layout from "src/components/global/Layout";
import PrivateRoute from "src/components/auth/PrivateRoute";

const Payments = ({ location }) => (
  <PrivateRoute location={location}>
    <Layout selectedTab={"2"}>
      <div className="site-layout-content">Payments</div>
    </Layout>
  </PrivateRoute>
);

export default Payments;
