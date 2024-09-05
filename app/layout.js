import { Roboto } from 'next/font/google'
import '@/app/_styles/globals.css'
import Header from './_components/Header'
import Navigation from './_components/Navigation'

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
			<body className={`${roboto.className} relative h-screen bg-white flex `}>
				<Navigation />
				<div className="w-full flex flex-col h-ful overflow-x-hidden">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
