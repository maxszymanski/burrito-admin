import Image from 'next/image'
import MenuButton from './MenuButton'

function MenuRow({ menuItem }) {
	const { id, name, price, ingredients, category, image } = menuItem

	return (
		<li className="flex justify-between items-center gap-2 px-4 py-3  text-sm md:text-base w-max text-center md:w-full md:px-9 border-t dark:border-darkborder border-lightborder relative min-h-28">
			<Image src={image} width={40} height={40} alt="foto" className="h-12 w-12 " />
			<p className="w-10 ml-5 md:ml-0">{id}</p>
			<p className="w-24">{name}</p>
			<p className="w-24">{price}zł</p>
			<p className="w-28 text-sm ">{ingredients}</p>
			<p className="w-20">{category}</p>

			<MenuButton to={id} />
		</li>
	)
}

export default MenuRow
