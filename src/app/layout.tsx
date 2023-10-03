'use client'


import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material'
const inter = Inter({ subsets: ['latin'] })
import RtlProvider from '../rtl';
import theme from '../theme'
import AppLayout from '@/components/layoutes'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
//   themeColor:'#1c1c1c',
//   colorScheme:'dark'
// }

const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html dir='rtl' lang="en">
      <meta name="theme-color" content="#1c1c1c" />
      <ThemeProvider theme={theme}>
        <RtlProvider>
          <QueryClientProvider client={queryClient}>
          <body>
            <AppLayout>
              {children}
            </AppLayout>
          </body>
          </QueryClientProvider>
        </RtlProvider>
      </ThemeProvider>
    </html>
  )
}
