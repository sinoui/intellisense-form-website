import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Banner () {
    return <div className="banner-bg" style={{backgroundImage:`url(${useBaseUrl('/img/home/bannerBg.png')})`}}>
        <div className="banner-title-bg">
            <img src={useBaseUrl('/img/home/banner-title.png')} />
            <p>通过拖拽制作表单、在线设计流程，即完成应用搭建，而且无需编写代码。</p>
        </div>
        <img className="banner-img" src={useBaseUrl('/img/home/banner-img.png')} />
    </div>
}