'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';

function Keyboard(props: {
    layout: Array<Array<string>>,
    onKeyPress: (key: string) => void,
}) {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const bgcolor = isDarkMode ? '#6d6d6d' : '#d1d2d3';
    const buttonColor = isDarkMode ? "#6c6d6e" : "white";

    return (
      <Box
       sx={{
         bgcolor,
         position: 'fixed',
         height: '50vh',
         width: '100vw',
         bottom: 0,
         gridAutoRows: 'max-content',
       }}
      >
        <Grid 
         container
         spacing={2}
         width='100vw'
        >
          {
            props.layout.map((keys, idx) => (
              <Grid
               container
               spacing={2}
               size={12}
               sx={{
                   height: `${ 100 / keys.length }%`,
                   gridAutoRows: 'max-content',
               }}
               key={`[${keys}]-${idx}`}
              >
                {
                  keys.map((key, idx) => (
                    <Grid size="grow" key={`${key}-${idx}`} >
                      <Button
                       onClick={() => props.onKeyPress(key)}
                       variant="contained"
                       key={`btn-${key}-${idx}`}
                       sx={{ 
                         color: buttonColor === "white" ? "black" : "white", 
                         bgcolor: buttonColor,
                       }}
                      />
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
  
  return (
    <div>
        <p>{msg}</p>
        <Keyboard 
            layout={[['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]} 
            onKeyPress={(key) => setMsg((prev) => prev + key)} 
        />
    </div>
  );
}
