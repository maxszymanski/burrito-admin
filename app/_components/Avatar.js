import { useRef, useState } from 'react'
import useClickOutside from '../_hooks/useClickOutside'
import avatar from '@/public/user2.webp'
import Image from 'next/image'
import Link from 'next/link'

function Avatar() {
	const [isUserOpen, setIsUserOpen] = useState(false)
	const userRef = useRef(null)

	const handleCloseUser = () => {
		if (!isUserOpen) return
		setIsUserOpen(false)
	}

	useClickOutside(userRef, handleCloseUser)

	return (
		<div ref={userRef} className="flex items-center gap-4 relative">
			<p className="hidden md:block text-xl dark:text-darktext">Maksymilian</p>
			<button
				onClick={() => setIsUserOpen(is => !is)}
				className="flex items-center gap-2.5 text-lighttext hover:text-primary transition-colors duration-300 cursor-pointer dark:text-darktext dark:hover:text-darkPrimary ">
				<Image
					src={avatar}
					alt="avatar"
					className="w-8 h-8 md:w-11 md:h-11 rounded-full border border-lightborder dark:border-darktext hover:border-primary dark:hover:border-darkPrimary"
				/>
			</button>
			<div
				className={`absolute  top-10 right-0 md:top-12 md:-right-16 bg-white border border-lightborder dark:bg-darkSecondBg dark:border-darkborder rounded-lg   ${
					isUserOpen ? 'block' : 'hidden'
				}`}>
				<Link
					href="/account"
					className="flex items-center gap-1.5 text-nowrap dark:text-darktext text-lighttext  py-4 px-8 border-b border-lightborder dark:border-darkborder hover:text-primary transition-colors duration-300 dark:hover:text-darkPrimary md:text-lg  ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="md:size-5 size-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
						/>
					</svg>
					Update account
				</Link>
				<button className="px-6 py-2 my-6 text-primary bg-white rounded-lg font-medium dark:text-darkPrimary dark:bg-darkbg border border-lightborder dark:border-darkborder  transition-colors duration-300 hover:bg-lightPrimary dark:hover:bg-darktext md:text-lg ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 inline mr-2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
						/>
					</svg>
					Sign out
				</button>
			</div>
		</div>
	)
}

export default Avatar
