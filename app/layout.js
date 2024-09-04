import { Roboto } from 'next/font/google'
import '@/app/_styles/globals.css'
import Header from './_components/Header'

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700', '500'],
})

export const metadata = {
	title: 'Burrito Admin | Dashboard',
	description: 'Dashboard',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.className} min-h-screen bg-white`}>
				<div>
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
