import 'normalize.css';
import '~/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Layout } from '~/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ToDo App</title>
        <meta name="description" content="This is ToDo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
