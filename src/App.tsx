import React from 'react';

import Routes from './routes';
import { ThemeProvider } from './theme';
interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <ThemeProvider name='dark'>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
