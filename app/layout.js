import { Roboto } from 'next/font/google'
import '@/app/_styles/globals.css'
import Header from './_components/Header'
import Navigation from './_components/Navigation'
import Providers from './providers'

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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${roboto.className} relative h-screen bg-bg flex dark:bg-darkbg transition-all duration-300 `}>
				<Providers>
					<Navigation />
					<div className="w-full flex flex-col h-ful overflow-x-hidden ml-12 lg:ml-0">
						<Header />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
