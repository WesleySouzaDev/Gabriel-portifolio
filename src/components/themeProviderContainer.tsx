'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProviderContainer = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
