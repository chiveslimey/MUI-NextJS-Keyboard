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
         bgcolor: theme => theme.palette.mode === "light" ? "#cccccc": "#6d6d6d",
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
                       key={`btn-${key}-${idx}`}
                       fullWidth
                       sx={{
                         color: theme => theme.palette.mode === "light" ? "black" : "white",
                         bgcolor: theme => theme.palette.mode === "light" ? "white" : "#6c6d6e",
                         padding: theme => theme.spacing(2),
                         textAlign: "center",
                         textTransform: "none",
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
    const [text, setText] = useState('');
    const layout = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['h', 'i', 'j'],
    ];
    const callback = key => setText(prev => prev + key);

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
