import React from "../../web_modules/react.js";
import {useTheme} from "../theme/index.js";
const Root = ({}) => {
  const {theme: theme2, setTheme} = useTheme();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", null, JSON.stringify(theme2), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setTheme("light")
  }, "Light"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setTheme("dark")
  }, "Dark")));
};
export default Root;
