// 'use client'
import Image from 'next/image'
import Container from '../_components/Container'
import MenuButton from '../_components/MenuButton'
import supabase from '../_services/supabase'
import MenuRow from '../_components/MenuRow'

async function Menu() {
	const { data, error } = await supabase.from('menu').select('*')
	const menu = data
		.sort((a, b) => {
			return a.category.localeCompare(b.category)
		})
		.reverse()

	if (error) {
		return <div>Błąd: {error.message}</div>
	}

	return (
		<main className="bg-secondBg w-full py-12 px-6 md:px-12 overflow-auto dark:bg-darkSecondBg h-full">
			<Container>
				<div className="flex gap-5 w-fit border border-lightborder dark:border-darkborder bg-white  rounded-md dark:bg-darkbg py-4 px-6 text-nowrap mb-6 ">
					<select defaultValue={0} className="bg-transparent p-2">
						<option>Sort by name (A-Z)</option>
						<option>Sort by name (Z-A)</option>
					</select>
					<p>Filter</p>
				</div>
				<ul className="w-full border border-lightborder dark:border-darkborder bg-white  rounded-md dark:bg-darkbg overflow-auto">
					<li className="flex justify-between gap-2 px-9 py-4  text-sm md:text-base w-max md:w-full text-center ">
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
						<div className="w-8 "></div>
					</li>
					{menu.map(item => (
						<MenuRow menuItem={item} key={item.id} />
					))}
				</ul>
			</Container>
		</main>
	)
}

export default Menu
