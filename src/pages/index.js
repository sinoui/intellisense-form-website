import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Feat from "./component/Feat";
import Case from "./component/Case";
import "./index.css";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Feat />
      <Case />
      <footer className="copyright">Copyright©2019 Sinosoft.com.cn</footer>
    </div>
  );
}

export default Home;
