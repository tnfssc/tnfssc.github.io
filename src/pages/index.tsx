import React from 'react';

import { useTheme } from '../theme';

interface RootProps {}

const Root = ({}: RootProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <header>
        {JSON.stringify(theme)}
        <br />
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </header>
    </div>
  );
};

export default Root;
