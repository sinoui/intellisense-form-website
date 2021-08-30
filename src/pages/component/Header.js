import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "./Link";

export default function Header() {
  return (
    <header className="nav-top">
      <img src={useBaseUrl("/img/home/logo.png")} height={48} />
      <div className="logo-title-divider"></div>
      <div className="nav-title">智能表单</div>
      <div class="nav-links-wrapper">
        <Link title="文档" />
      </div>
    </header>
  );
}
