import React from "../../web_modules/react.js";
import {useTheme} from "../theme/index.js";
import "./Navbar.css.proxy.js";
const NavBar = () => {
  const {setTheme} = useTheme();
  return /* @__PURE__ */ React.createElement("div", {
    className: "NavbarContainer"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {flex: 1}
  }, "Navbar"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("select", {
    onChange: (e) => {
      setTheme(e.target.value);
    }
  }, /* @__PURE__ */ React.createElement("option", {
    value: "dark"
  }, "Dark"), /* @__PURE__ */ React.createElement("option", {
    value: "light"
  }, "Light"))));
};
export default NavBar;
