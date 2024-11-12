'use client';

import { useEffect, Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ColorSchemeManager() {
  const theme = useTheme();
  useEffect(
    () => { 
      theme.palette.mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'; 
    }, 
    [useMediaQuery('(prefers-color-scheme: dark)'), theme],
  );
  return <Fragment></Fragment>;
}
