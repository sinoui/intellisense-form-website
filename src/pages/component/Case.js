import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Case() {
  return (
    <div className="case-wrapper">
      <div className="case-title">应用场景</div>
      <div className="case-row">
        <div
          className="case-card"
          style={{
            backgroundImage: `url(${useBaseUrl("img/home/case-ddgl.png")})`,
          }}
        >
          <div className="case-card-title">订单管理</div>
        </div>
        <div
          className="case-card"
          style={{
            backgroundImage: `url(${useBaseUrl("img/home/case-yzsq.png")})`,
          }}
        >
          <div className="case-card-title">印章申请</div>
        </div>
        <div
          className="case-card"
          style={{
            backgroundImage: `url(${useBaseUrl("img/home/case-khgx.png")})`,
          }}
        >
          <div className="case-card-title">客户关系管理</div>
        </div>
      </div>

      <div className="case-row">
        <div
          className="case-card"
          style={{
            backgroundImage: `url(${useBaseUrl("img/home/case-qjsq.png")})`,
          }}
        >
          <div className="case-card-title">请假申请</div>
        </div>
        <div
          className="case-card"
          style={{
            backgroundImage: `url(${useBaseUrl("img/home/case-ccsq.png")})`,
          }}
        >
          <div className="case-card-title">出差申请</div>
        </div>
        <div
          className="case-card"
          style={{
            backgroundImage: `url(${useBaseUrl("img/home/case-sbgl.png")})`,
          }}
        >
          <div className="case-card-title">设备管理</div>
        </div>
      </div>
    </div>
  );
}
