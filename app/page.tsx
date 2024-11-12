'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


function Keyboard(props: {
    layout: Array<Array<string>>,
    onKeyPress: (key: string) => void,
}) {
    return (
      <Box
       sx={{
         bgcolor: theme => theme.palette.mode === "light" ? "#d1d2d3": "#6d6d6d",
         position: 'fixed',
         height: '50vh',
         width: '100vw',
         bottom: 0,
       }}
      >
        <Grid 
         container
         direction="column"
         spacing={2}
         margin="5%"
        >
          {
            props.layout.map((keys, idx) => (
              <Grid
               container
               spacing={2}
               size={12}
               key={`[${keys}]-${idx}`}
              >
                {
                  keys.map((key, idx) => (
                    <Grid size="grow" key={`${key}-${idx}`} >
                      <Button
                       onClick={() => props.onKeyPress(key)}
                       variant="contained"
                       key={`btn-${key}-${idx}`}
                       fullWidth
                       sx={{
                         color: theme => theme.palette.mode === "light" ? "black" : "white",
                         bgcolor: theme => theme.palette.mode === "light" ? "white" : "#6c6d6e",
                         textAlign: "center",
                       }}
                      >
                        {key}
                      </Button>
                    </Grid>
                  ))
                }
              </Grid>
            ))
          }
        </Grid>
    </Box>
  );
}

export default function App() {
  const [msg, setMsg] = useState('');
  const layout = [['Rad', 'I', '(', ')', '{bksp}'],
 ['sin', 'π', '7', '8', '9', '÷'],
 ['cos', 'e', '4', '5', '6', 'x'],
 ['tan', '√', '1', '2', '3', '-'],
 ['log', '^', '0', ',', '=', '+']];
  
  return (
    <div>
        <p>{msg}</p>
        <Keyboard 
            layout={layout}
            onKeyPress={(key) => setMsg((prev) => prev + key)} 
        />
    </div>
  );
}
