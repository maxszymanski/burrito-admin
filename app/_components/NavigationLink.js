'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavigationLink({ to, children }) {
	const pathname = usePathname()
	return (
		<li
			className={`lg:hover:bg-pink-200 transition-colors duration-300 lg:hover:text-pink-500  rounded-2xl dark:hover:text-darkPrimary lg:dark:hover:bg-darktext ${
				pathname === to ? 'lg:bg-pink-200 text-pink-500 dark:text-darkPrimary lg:dark:bg-darktext' : ''
			}`}>
			<Link className=" w-full flex items-center gap-3.5 py-2.5 lg:px-4 px-2.5 " href={to}>
				{children}
			</Link>
		</li>
	)
}

export default NavigationLink
