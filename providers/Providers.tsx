'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, ReactNode } from 'react'
import React from "react";

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
