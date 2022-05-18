import { Providers } from '@/providers/providers';

function App({ Component, pageProps, fallback }) {
  return (
    <Providers fallback={fallback}>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
