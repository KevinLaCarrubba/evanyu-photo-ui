import { AppProps } from 'next/app'
import '../styles/globals.scss'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Nav />
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
