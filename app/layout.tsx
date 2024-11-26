import { ReactNode } from 'react';

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { ThemeProvider } from '@mui/material/styles';
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

/* Switch between dark and light mode depending on the system default */
function ColorScheme(props: { children: ReactNode }) {
  return (
    <ThemeProvider defaultMode='system' >
      { props.children }
    </ThemeProvider>
  );
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ColorScheme>
            { props.children }
          </ColorScheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
