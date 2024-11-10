'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
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
        <Stack 
         direction="column"
         sx={{ 
             bgcolor, 
             position: 'fixed', 
             bottom: 0, 
             height: "50%", 
             width: "100%",
             display: 'flex', 
             justifyContent: 'space-around',
             margin: "5%",
         }}
        >
            {
                props.layout.map(
                    (keys, idx) => (
                        <Stack 
                         direction="row" 
                         sx={{ 
                             display: 'flex',
                             justifyContent: 'space-around',
                             margin: "5%",
                         }} 
                         key={`[${keys}]-${idx}`}
                        >
                            {
                                keys.map(
                                    (key, idx) => (
                                        <Button
                                         onClick={() => props.onKeyPress(key)}
                                         variant="contained"
                                         key={`${key}-${idx}`}
                                         sx={{ 
                                             color: buttonColor === "white" ? "black" : "white", 
                                             bgcolor: buttonColor,
                                         }}
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
        </Stack>
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
