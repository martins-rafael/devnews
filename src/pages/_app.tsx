import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { Header } from '../components/Header';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextAuthProvider session={pageProps.session}>
    <Header />
    <Component {...pageProps} />
  </NextAuthProvider>
);

export default MyApp
