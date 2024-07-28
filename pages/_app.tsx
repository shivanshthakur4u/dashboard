import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { DashboardProvider } from '@/context/DashboardContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DashboardProvider>
      <Component {...pageProps} />
    </DashboardProvider>
  );
}

export default MyApp;