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
       sx={theme => ({
         bgcolor: theme.palette.lightgray,
         position: 'fixed',
         height: '50vh',
         width: '100vw',
         bottom: 0,
       })}
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
                       key={`btn-${key}-${idx}`}
                       fullWidth
                       sx={theme => ({
                         color: theme.palette.text.primary,
                         bgcolor: theme => theme.palette.invertableWhite,
                         padding: theme => theme.spacing(2),
                         textAlign: "center",
                         textTransform: "none",
                       })}
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
    const [text, setText] = useState('');
    const layout = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['h', 'i', 'j'],
    ];
    const callback = (key: string) => {
        setText(prev => prev + key);
    };

    return (
        <div>
            <p>{text}</p>
            <Keyboard
             layout={layout}
             onKeyPress={callback}
            />
        </div>
    );
}
