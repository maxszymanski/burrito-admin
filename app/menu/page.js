'use client'
import Image from 'next/image'
import Container from '../_components/Container'
import MenuButton from '../_components/MenuButton'

function Menu() {
	return (
		<main className="bg-secondBg w-full py-12 px-6 md:px-12 h-full dark:bg-darkSecondBg">
			<Container>
				<div className="flex gap-5 w-fit border border-lightborder dark:border-darkborder bg-white  rounded-md dark:bg-darkbg py-4 px-6 text-nowrap mb-6 ">
					<p>Sort by name</p>
					<p>Filter</p>
				</div>
				<div className="w-full border border-lightborder dark:border-darkborder bg-white  rounded-md dark:bg-darkbg overflow-auto">
					<div className="flex justify-between gap-2 px-9 py-4  text-sm md:text-base w-max md:w-full text-center ">
						<div className="w-10"></div>
						<div className="w-10 ">
							<p>ID</p>
						</div>
						<div className="w-24 ">
							<p>Name</p>
						</div>
						<div className="w-24 ">
							<p>Price</p>
						</div>
						<div className="w-28 ">
							<p>Ingredients</p>
						</div>
						<div className="w-20 ">
							<p>Category</p>
						</div>
						<div className="w-6 "></div>
					</div>
					<div className="flex justify-between items-center gap-2 px-4 py-3  text-sm md:text-base w-max text-center md:w-full md:px-9 border-t dark:border-darkborder border-lightborder relative">
						<Image
							src="/user2.webp"
							width={40}
							height={40}
							alt="foto"
							className="h-10 w-10 object-center  rounded-full border dark:border-darkborder border-lightborder"
						/>
						<p className="w-10 ml-5 md:ml-0">2</p>
						<p className="w-24">Burrito Beef</p>
						<p className="w-24">32zł</p>
						<p className="w-28 text-sm">tortilla, wołowina, warzywa, sos</p>
						<p className="w-20">Burrito</p>

						<MenuButton />
					</div>
					<div className="flex justify-between items-center gap-2 px-4 py-3  text-sm md:text-base w-max text-center md:w-full md:px-9 border-t dark:border-darkborder border-lightborder relative">
						<Image
							src="/user2.webp"
							width={40}
							height={40}
							alt="foto"
							className="h-10 w-10 object-center  rounded-full border dark:border-darkborder border-lightborder"
						/>
						<p className="w-10 ml-5 md:ml-0">2</p>
						<p className="w-24">Burrito Beef</p>
						<p className="w-24">32zł</p>
						<p className="w-28 text-sm">tortilla, wołowina, warzywa, sos</p>
						<p className="w-20">Burrito</p>

						<MenuButton />
					</div>
					<div className="flex justify-between items-center gap-2 px-4 py-3  text-sm md:text-base w-max text-center md:w-full md:px-9 border-t dark:border-darkborder border-lightborder relative">
						<Image
							src="/user2.webp"
							width={40}
							height={40}
							alt="foto"
							className="h-10 w-10 object-center  rounded-full border dark:border-darkborder border-lightborder"
						/>
						<p className="w-10 ml-5 md:ml-0">2</p>
						<p className="w-24">Burrito Beef</p>
						<p className="w-24">32zł</p>
						<p className="w-28 text-sm">tortilla, wołowina, warzywa, sos</p>
						<p className="w-20">Burrito</p>

						<MenuButton />
					</div>
				</div>
			</Container>
		</main>
	)
}

export default Menu
