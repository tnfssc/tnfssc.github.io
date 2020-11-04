import React from "../../../web_modules/react.js";
import Navbar2 from "../../components/Navbar.js";
import {useTheme} from "../../theme/index.js";
import {RGBtorgba} from "../../utils/index.js";
import "./Root.css.proxy.js";
const Root2 = ({}) => {
  const {theme: theme2} = useTheme();
  return /* @__PURE__ */ React.createElement("div", {
    className: "FullPage",
    style: {
      color: RGBtorgba(theme2.style.color),
      backgroundColor: RGBtorgba(theme2.style.backgroundColor)
    }
  }, JSON.stringify(theme2), JSON.stringify(RGBtorgba(theme2.style.color)), /* @__PURE__ */ React.createElement(Navbar2, null));
};
export default Root2;
