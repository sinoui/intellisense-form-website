import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FEAT_DATA } from "../../contants";

function FeactCard({ data }) {
  return (
    <div
      className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      style={{ marginTop: "50px" }}
    >
      <img src={useBaseUrl(`${data.imgUrl}`)} />
      <div className="feat-card-title">{data.title}</div>
      <div className="feat-card-text">{data.content}</div>
    </div>
  );
}

export default function Feat() {
  return (
    <div className="feat-wrapper">
      <div className="feat-title">主要特征</div>
      <div className="row">
        {FEAT_DATA.map((item) => (
          <FeactCard data={item} />
        ))}
      </div>
    </div>
  );
}
