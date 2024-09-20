'use client'
import Image from 'next/image'

function EditMenuItem({ menuItem }) {
	const { id, name, price, ingredients, category, image } = menuItem

	return (
		<form
			onSubmit={console.log(id)}
			className="flex flex-col w-full gap-2 px-4 py-3  text-sm md:text-base text-center md:w-full md:px-9 border-t dark:border-darkborder border-lightborder relative min-h-28">
			<Image src={image} width={40} height={40} alt="foto" className="h-12 w-12 " />
			<input defaultValue={name} className=""></input>
			<input defaultValue={price} className=""></input>
			<input defaultValue={ingredients} className="text-sm"></input>
			<input defaultValue={category} className=""></input>
			<button>Zapisz</button>
		</form>
	)
}

export default EditMenuItem
