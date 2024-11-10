'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
             bottom: 0, 
             height: "50%", 
             display: 'flex', 
             justifyContent: 'stretch', }}
        >
            {
                props.layout.map(
                    (keys, idx) => (
                        <Stack 
                         direction="row" 
                         sx={{ 
                             display: 'flex',
                             justifyContent: 'stretch',
                         }} 
                         key={idx}
                        >
                            {
                                keys.map(
                                    (key, idx) => (
                                        <Button
                                         onClick={() => props.onKeyPress(key)}
                                         variant="contained"
                                         sx={{ 
                                             color: buttonColor === "white" ? "black" : "white", 
                                             bgcolor: buttonColor,
                                         }}
                                         key={idx}
                                        >
                                             {key} 
                                        </Button>
                                    )
                                )
                            }
                        </Stack>
                    )
                )
            }
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
