/* eslint-disable react/prop-types */
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {AuthProvider} from '../contexts/auth';
import * as gtag from '../lib/gtag';
import Navbar from '../components/navbar/Navbar';
// import Watermark from '../components/Watermark/Watermark';

import '../stylesheets/globalStyle.css';

const App = ({Component, pageProps}) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      {/* <Watermark /> */}
    </AuthProvider>
  );
};

export default App;
