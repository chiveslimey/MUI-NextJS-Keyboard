"use client";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CustomTable({ rows = {} }: { rows: Record<string, React.ReactNode> }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Problem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rows).map((key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell>
                {rows[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function App() {
  return (
    <CustomTable
      rows={{
        hello: (
          <Button
            variant="contained"
            onClick={() => {
              const p = document.createElement('p');
              p.textContent = 'clicked!';
              document.body.appendChild(p);
            }}
          >
            Click me
          </Button>
        ),
      }}
    />
  );
}
