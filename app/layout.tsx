import { ReactNode } from 'react';

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import "./globals.css";


const inter = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
})

export const metadata: Metadata = {
  title: "Math Problem Generator",
  description: "Generates random math problems.",
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
