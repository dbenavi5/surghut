import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthProvider, ProtectRoute } from '../contexts/auth';
import * as gtag from '../lib/gtag'
import '../stylesheets/style.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  )
}

export default App
