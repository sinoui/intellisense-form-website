import React from "react";
import ThemeHeading from "@theme/Heading";

const Headings = {
  h2: ThemeHeading("h2"),
  h3: ThemeHeading("h3"),
  h4: ThemeHeading("h4"),
  h5: ThemeHeading("h5"),
  h6: ThemeHeading("h6"),
};

const getText = (children) => {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return child;
    }
    if (child.props?.children) {
      return getText(child.props.children);
    }
    return "";
  }).join("");
};

export default function Heading({ children, as: headingType = "h3", id }) {
  const HeadingComp = Headings[headingType];
  return <HeadingComp id={id}>{children}</HeadingComp>;
}
