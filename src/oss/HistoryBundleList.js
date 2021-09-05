import React, { useEffect, useState } from "react";

/**
 * 智能表单发布包历史版本
 */
function HistoryBundleList({ type }) {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const { default: getHistoryVersionList } = await import(
      "./getHistoryVersionList"
    );
    const result = await getHistoryVersionList(type);
    setItems(result ?? []);
  }, []);

  return items.length > 0 ? (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.version}：&nbsp;&nbsp;<a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  ) : (
    <span>很抱歉，当前只提供最新版本安装包。</span>
  );
}

export default HistoryBundleList;
