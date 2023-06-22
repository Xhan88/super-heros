import { AuthProvider } from './auth/context'
import { AppRouter } from './router/AppRouter'

export const HerosApp = () => {
  return (

    <AuthProvider>

      <AppRouter />

    </AuthProvider>
  )
}
