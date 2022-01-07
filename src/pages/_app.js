import '../styles/globals.css'
import { EnderecoProvider } from '../context/enderecoContext'

function MyApp({ Component, pageProps }) {
  return (
    <EnderecoProvider>
      <Component {...pageProps} />
    </EnderecoProvider>
  );
}

export default MyApp
