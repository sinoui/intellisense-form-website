import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import PrismHighlight, { defaultProps, Language } from "prism-react-renderer";

interface Props {
  language: Language;
  code: string;
  children: (props: {
    style: React.CSSProperties;
    [x: string]: any;
  }) => React.ReactNode;
}

const HighLight: React.FC<Props> = ({ language, code, children }) => {
  const [mounted, setMounted] = useState(false);
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true);
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const prismTheme =
    siteConfig.themeConfig.prism[colorMode === "dark" ? "darkTheme" : "theme"];

  return (
    <PrismHighlight
      {...defaultProps}
      theme={prismTheme}
      language={language}
      code={code}
      key={String(mounted)}
    >
      {children}
    </PrismHighlight>
  );
};

export default HighLight;
