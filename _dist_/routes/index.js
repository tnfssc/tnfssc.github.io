import React from "../../web_modules/react.js";
import {
  BrowserRouter as RouterProvider,
  Switch,
  Route
} from "../../web_modules/react-router-dom.js";
import RootRoute from "./root.js";
import NotFound2 from "../pages/404NotFound.js";
const Routes = ({}) => {
  return /* @__PURE__ */ React.createElement(RouterProvider, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true
  }, /* @__PURE__ */ React.createElement(RootRoute, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(NotFound2, null))));
};
export default Routes;
