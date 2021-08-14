import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as AuthProvider } from '~/features/auth/context'
import CircularProgress from '~/app/layout/CircularProgress'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong : </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  )
}

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider: any = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <AuthProvider>
        <Router>{children}</Router>
      </AuthProvider>
    </React.Suspense>
  )
}
