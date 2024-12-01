import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Theme from './theme';

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

declare module "@mui/material/styles" {
  interface Palette {
    lightgray: string,
    invertableWhite: string,
  }
  interface PaletteOptions {
    lightgray?: string,
    invertableWhite?: string,
  }
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Theme>
            { props.children }
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
