function Menu() {
	return (
		<main className="bg-secondBg w-full p-12 overflow-x-auto h-full dark:bg-darkSecondBg">
			<div className="w-full border border-lightborder dark:border-darkborder bg-white  rounded-md dark:bg-darkbg ">
				<div className="flex justify-between px-12 py-4">
					<div className="w-20">
						<p>Image</p>
					</div>
					<div className="w-20">
						<p>ID</p>
					</div>
					<div className="w-20">
						<p>Name</p>
					</div>
					<div className="w-20">
						<p>Price</p>
					</div>
					<div className="w-20">
						<p>Ingredients</p>
					</div>
					<div className="w-20">
						<p>Category</p>
					</div>
					<div className="flex gap-5 ">
						<p>Sort by {`->`}</p>
						<p>Filter</p>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Menu
