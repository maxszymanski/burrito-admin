'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import avatar from '@/public/user2.webp'

function Header() {
	const [isLight, setIsLight] = useState(true)
	const pathname = usePathname()

	const title = pathname === '/' ? 'Dashboard' : pathname.replace('/', '')

	return (
		<header className="flex items-center justify-between p-8 w-full border-b border-slate-200">
			<h2 className="text-4xl first-letter:uppercase font-medium text-gray-700">{title}</h2>
			<div className="flex items-center gap-5 text-gray-500">
				{isLight ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-7 cursor-pointer hover:text-pink-400 transition-colors duration-300"
						onClick={() => setIsLight(is => !is)}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-7 cursor-pointer hover:text-pink-400 transition-colors duration-300"
						onClick={() => setIsLight(is => !is)}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
						/>
					</svg>
				)}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-7 hover:text-pink-400 
                    cursor-pointer transition-colors duration-300">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
					/>
				</svg>
				<div className="flex items-center gap-2.5 text-gray-500 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
					<Image src={avatar} alt="avatar" className="w-11 h-11 rounded-full" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-4 font-bold  ">
						<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
					</svg>
				</div>
			</div>
		</header>
	)
}

export default Header
