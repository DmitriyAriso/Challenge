import { getTails } from './api'

export default function MyApp({ Component, pageProps, tails }) {
	return <Component {...pageProps} tails={tails} />
}

MyApp.getInitialProps = async () => {
	const { tails } = await getTails()

	return {
		tails,
	}
}
