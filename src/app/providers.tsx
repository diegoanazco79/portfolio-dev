'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { store } from '@/redux/store';

export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='light'>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </ReduxProvider>
  );
}
