import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';


function Keyboard(props: {
    layout: Array<Array<string>>,
    onKeyPress: (key: string) => void,
}) {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const bgcolor = isDarkMode ? '#6d6d6d' : '#d1d2d3';
    const buttonColor = isDarkMode ? "#6c6d6e" : "white";
    
    return (
        <Box sx={{ bgcolor, position: 'fixed', bottom: 0, height: "50%" }}>
            {
                props.layout.map(
                    (keys) => (
                        <Stack direction="row" sx={{ height: `${ 100 / props.layout.length }%` }}>
                            {
                                keys.map(
                                    (key) => (
                                        <Button
                                         onClick={() => props.onKeyPress(key)}
                                         variant="contained"
                                         color={ buttonColor === "white" ? "#black" : "white" }
                                         sx={{ bgcolor: buttonColor }}
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
    <Keyboard layout={[['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]}, onClick={setMsg} />
  )
}
