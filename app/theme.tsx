import { ReactNode } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
  
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        lightgray: '#d0d3d9',
        invertableWhite: 'white',
      }
    },
    dark: {
      palette: {
        lightgray: '#333333',
        invertableWhite: '#7c7c7c',
      }
    },
  },
});

/* Switch between dark and light mode depending on the system default */
export default function Theme(props: { children: ReactNode }) {
  return (
    <ThemeProvider theme={ theme } >
      { props.children }
    </ThemeProvider>
  );
}
  
