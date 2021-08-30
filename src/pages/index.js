import React from "react";
import Banner from "./component/Banner";
import Feat from "./component/Feat";
import Case from "./component/Case";
import "./index.css";
import Layout from "@theme/Layout";

function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <Feat />
        <Case />
      </main>

      <footer className="copyright">Copyright©2019 Sinosoft.com.cn</footer>
    </Layout>
  );
}

export default Home;
