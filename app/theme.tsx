import { ReactNode } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
  
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        lightgray: '#cccccc',
        invertableWhite: 'white',
      }
    },
    dark: {
      palette: {
        lightgray: '#6d6d6d',
        invertableWhite: '#6c6d6e',
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
  