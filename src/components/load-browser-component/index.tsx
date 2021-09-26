import React, { lazy, Suspense } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";

const loadBrowserComponent = (
  load: () => Promise<{ default: React.ComponentType<any> }>
) => {
  const LazyComponent = lazy(load);

  return (props: any) => {
    const isBrowser = useIsBrowser();
    return isBrowser ? (
      <Suspense fallback={null}>
        <LazyComponent {...props} />
      </Suspense>
    ) : null;
  };
};

export default loadBrowserComponent;
