'use client'

function MenuList({ position, isOpen }) {
	if (position)
		return (
			<div
				style={{
					top: `${position.y}px`,
					right: `${position.x}px`,
				}}
				className={`fixed bg-white border border-lightborder z-10 dark:bg-darkSecondBg dark:border-darkborder rounded-lg w-44 h-44 
				${isOpen ? 'block' : 'hidden'}
			 `}></div>
		)
}

export default MenuList
