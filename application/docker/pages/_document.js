import Document, {Html, Head, Main, NextScript} from 'next/document';


import { GA_TRACKING_ID } from '../lib/gtag'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }
  render() {
    // console.log(GA_TRACKING_ID);
    return (
      <Html lang="en">
        <Head>
          {/* <title>SurgeHut</title> */}
	        <meta name="Description" content="SFSU team3  project Fall 2020."></meta>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"/>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
           <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
           />
           <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
           `,
            }}
           />

        </Head>
        <body>
	      <center>
            <Main />
	      </center>
          <NextScript />
        </body>
      </Html>
    );
  }
}

          // script googla analytic to put between <Head></Head>

