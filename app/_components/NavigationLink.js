'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavigationLink({ to, children }) {
	const pathname = usePathname()
	return (
		<li
			className={`hover:bg-pink-200 transition-colors duration-300 hover:text-pink-500  rounded-2xl ${
				pathname === to ? 'bg-pink-200 text-pink-500' : ''
			}`}>
			<Link className=" w-full  flex items-center gap-2.5 py-2.5 px-4 " href={to}>
				{children}
			</Link>
		</li>
	)
}

export default NavigationLink
