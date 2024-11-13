import { ReactNode } from 'react';

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

import "./globals.css";


const inter = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Math Problem Generator",
  description: "Generates random math problems.",
};

const light = createTheme({palette: {mode: 'light'}});
const dark = createTheme({palette: {mode: 'dark'}});

function ReactiveTheme(props: { children: ReactNode }) {
  const preferred = useMediaQuery('(prefers-color-scheme: dark)') ? dark : light;
  const [scheme, setScheme] = useState('light');
  if scheme !== preferred {
    setScheme(preferred);
  }

  return (
    <ThemeProvider theme={ preferred === 'light' ? light : dark }>
      { props.children }
    </ThemeProvider>
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ReactiveTheme>
            {props.children}
          </ReactiveTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
