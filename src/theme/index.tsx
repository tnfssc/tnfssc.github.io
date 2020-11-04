import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  ReactChild,
  StyleHTMLAttributes,
} from 'react';

import darkStyle from './dark';
import lightStyle from './light';

const defaultValue = {
  theme: { style: darkStyle },
  setTheme: (_: 'light' | 'dark'): void => {},
};
export const Theme = createContext(defaultValue);

export const allThemes = {
  dark: { style: darkStyle },
  light: { style: lightStyle },
};

export type themeType = 'light' | 'dark';

export const ThemeProvider = ({
  name,
  children,
}: {
  name: themeType;
  children: ReactChild;
}): ReactElement => {
  const [currentTheme, setCurrentTheme] = useState(allThemes[name]);

  const setTheme = (name: themeType): void => setCurrentTheme(allThemes[name]);

  return (
    <Theme.Provider value={{ theme: currentTheme, setTheme: setTheme }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = (): typeof defaultValue => {
  const a = useContext(Theme);
  return a;
};
