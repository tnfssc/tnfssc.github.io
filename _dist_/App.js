import React from "../web_modules/react.js";
import Routes from "./routes/index.js";
import {ThemeProvider} from "./theme/index.js";
const App = ({}) => {
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    name: "dark"
  }, /* @__PURE__ */ React.createElement(Routes, null));
};
export default App;
