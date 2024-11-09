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

function Table ({ rows = {} }: { rows: Record<string, Button> }) {
  return (
    <TableContainer component={Paper}>
      <RawTable sx={{ width: '75%' }}>
        
        <TableHead>
          <TableRow>
            <TableCell>問題名</TableCell>
            <TableCell>問題テンプレート</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {
            Object.keys(rows).map((key) => (
              <TableRow
                key={key}
                sx={{ border: '1px solid blue' }}
              >
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>
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
    <Table
      rows={{ hello: (
        <Button
          onClick={() => alert('hello!')}
        >
          Click me!
        </Button>
      )}}
    />
  )
}
