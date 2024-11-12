'use client';

import { useEffect, Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ColorSchemeManager() {
  const theme = useTheme();
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  useEffect(
    () => { 
      theme.palette.mode = mode; 
    }, 
    [mode, theme],
  );
  return <Fragment></Fragment>;
}
