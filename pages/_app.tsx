import '../assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import CustomHead from "../components/global/CustomHead";
import Navbar from "../components/global/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <>
          <CustomHead />
          <Navbar />
          <Component {...pageProps} />
        </>
    )
}

export default MyApp
