'use client';

import { ReactNode } from 'react';
import RawTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

function ColorScheme(props: { children: ReactNode }) {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const theme = createTheme({
    palette: { mode },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

function Table ({ rows = {} }: { rows: Record<string, ReactNode> }) {
  return (
    <TableContainer component={Paper} sx={{ minHeight: '90%', bgcolor: 'red' }}>
      <RawTable sx={{ width: '100%' }}>
        
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '50%' }}>問題名</TableCell>
            <TableCell sx={{ width: '50%' }}>問題テンプレート</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {
            Object.keys(rows).map((key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row" sx={{ width: '50%' }}>
                  {key}
                </TableCell>
                <TableCell sx={{ width: '50%' }}>
                  {rows[key]}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </RawTable>
    </TableContainer>
  );
}

export default function App() {
  return (
    <ColorScheme>
      <Table
        rows={{ hello: (
          <Button
            onClick={() => alert('hello!')}
          >
            Click me!
          </Button>
        )}}
      />
    </ColorScheme>
  )
}
