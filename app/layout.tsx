import { ReactNode } from 'react';

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Material-UI Admin Page Example",
  description: "Generated by create next app",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        //<AppRouterCacheProvider>
          {props.children}
        //</AppRouterCacheProvider>
      </body>
    </html>
  );
}
