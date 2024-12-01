'use client'

import { AuthProvider } from '@/app/providers/AuthProvider'
import QueryProvider from '@/app/providers/QueryProvider'
import { ReduxProvider } from '@/app/providers/ReduxProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <QueryProvider>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </QueryProvider>
    </AuthProvider>
  )
}
