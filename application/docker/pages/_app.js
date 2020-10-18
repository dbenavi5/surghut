<<<<<<< HEAD
import '../stylesheets/style.css'

export default function MyApp ({Component, pageProps}) {
    return <Component {...pageProps}/>
}
=======
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

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

  return <Component {...pageProps} />
}

export default App
>>>>>>> d55ed0fa51fd2620cad42e7fdd143abef8a74ff7
