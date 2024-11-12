import { ReactNode } from 'react';

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import "./globals.css";


const inter = Inter({ subsets: ["latin"] , weight: ["400"] });

export const metadata: Metadata = {
  title: "Math Problem Generator",
  description: "Generates random math problems.",
};

/* Switch between dark and light mode depending on the system default */
function ColorScheme(props: { children: ReactNode }) {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const theme = createTheme({
    palette: { mode },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ColorScheme>
            {props.children}
          </ColorScheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
