'use client'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'
import Notifications from './Notifications'
import Avatar from './Avatar'

function Header() {
	const pathname = usePathname()

	const title = pathname === '/' ? 'Dashboard' : pathname.replace('/', '')

	return (
		<header className="flex items-center justify-between p-4 md:p-8 w-full border-b bg-white dark:bg-darkbg border-lightborder dark:border-darkborder">
			<h2 className="text-xl md:text-4xl first-letter:uppercase font-medium text-lighttext dark:text-darktext">
				{title}
			</h2>
			<div className="flex items-center gap-5 text-lighttext md:flex-row-reverse md:gap-9">
				<ThemeSwitcher />
				<Notifications />
				<Avatar />
			</div>
		</header>
	)
}

export default Header
