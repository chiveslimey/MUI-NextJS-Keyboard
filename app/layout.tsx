import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import * as React from 'react';

export default function Layout(props: { chlidren: React.ReactNode }) {
  return (
      <AppRouterCacheProvider>
        {props.children}
      </AppRouterCacheProvider>
    )
}
