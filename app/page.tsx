'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import RawButton from '@mui/material/Button';
import RawBox from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';


const Button = styled(RawButton)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
    
  ...theme.applyStyles('dark', {
    color: "white",
    backgroundColor: '#6c6d6e',
  }),
}));

const Box = styled(Raw)(({ theme }) => ({
  backgroundColor: "#d1d2d3",
  ...theme.typography.body2,
    
  ...theme.applyStyles('dark', {
    color: "white",
    backgroundColor: '#6d6d6d',
  }),
}));

function Keyboard(props: {
    layout: Array<Array<string>>,
    onKeyPress: (key: string) => void,
}) {
    return (
      <Box
       sx={{
         bgcolor,
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
