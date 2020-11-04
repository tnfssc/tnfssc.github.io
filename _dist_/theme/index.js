import React, {
  createContext,
  useContext,
  useState
} from "../../web_modules/react.js";
import darkStyle from "./dark.js";
import lightStyle from "./light.js";
const defaultValue = {
  theme: {style: darkStyle},
  setTheme: (_) => {
  }
};
export const Theme = createContext(defaultValue);
export const allThemes = {
  dark: {style: darkStyle},
  light: {style: lightStyle}
};
export const ThemeProvider = ({
  name,
  children
}) => {
  const [currentTheme, setCurrentTheme] = useState(allThemes[name]);
  const setTheme = (name2) => setCurrentTheme(allThemes[name2]);
  return /* @__PURE__ */ React.createElement(Theme.Provider, {
    value: {theme: currentTheme, setTheme}
  }, children);
};
export const useTheme = () => {
  const a = useContext(Theme);
  return a;
};
