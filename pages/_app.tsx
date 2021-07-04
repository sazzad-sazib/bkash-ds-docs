import '../assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import HeadCustom from "../components/global/HeadCustom";
import Navbar from "../components/global/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <HeadCustom />
    <Navbar />
    <Component {...pageProps} />
  </>
}
export default MyApp
