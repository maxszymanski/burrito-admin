'use client'
import { useRef, useState } from 'react'
import MenuList from './MenuList'
import useClickOutside from '../_hooks/useClickOutside'

function MenuButton() {
	const [position, setPosition] = useState(null)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuRef = useRef(null)

	function handleClick(e) {
		e.stopPropagation()
		const rect = e.target.closest('button').getBoundingClientRect()
		setPosition({
			x: window.innerWidth - rect.width - rect.x + 5,
			y: rect.y + rect.height + 4,
		})

		setIsMenuOpen(is => !is)
	}

	const handleCloseMenu = () => {
		if (!isMenuOpen) return
		setIsMenuOpen(false)
	}

	useClickOutside(menuRef, handleCloseMenu)

	return (
		<div className="flex items-center justify-center" ref={menuRef}>
			<button
				className="dark:hover:text-darkPrimary hover:text-primary duration-300 transition-colors w-6 p-1.5 dark:hover:bg-darkSecondBg flex items-center justify-center rounded-md border border-transparent dark:hover:border-darkPrimary dark:focus:border-darkPrimary dark:focus:bg-darkSecondBg dark:focus:text-darkPrimary focus:text-primary hover:border-primary focus:border-primary "
				onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 flex-shrink-0">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
					/>
				</svg>
			</button>
			<MenuList position={position} isOpen={isMenuOpen} />
		</div>
	)
}

export default MenuButton
