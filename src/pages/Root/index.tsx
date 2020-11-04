import React from 'react';

import Navbar from '../../components/Navbar';
import { useTheme } from '../../theme';
import { RGBtorgba } from '../../utils';

import './Root.css';

interface RootProps {}

const Root = ({}: RootProps) => {
  const { theme } = useTheme();
  return (
    <div
      className="FullPage"
      style={{
        color: RGBtorgba(theme.style.color),
        backgroundColor: RGBtorgba(theme.style.backgroundColor),
      }}
    >
      {JSON.stringify(theme)}
      {JSON.stringify(RGBtorgba(theme.style.color))}
      <Navbar />
    </div>
  );
};

export default Root;
