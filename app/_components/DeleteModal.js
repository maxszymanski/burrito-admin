function DeleteModal() {
	return (
		<div className="absolute flex items-center justify-center overflow-hidden top-0 left-0 w-full h-full bg-[rgba(225,225,225,0.4)] dark:bg-[rgba(0,0,0,0.5)] z-20  ">
			<div className="border rounded-lg bg-white dark:bg-darkbg border-lightborder dark:border-darkborder p-4 ">
				<h3 className="text-xl font-bold text-primary dark:text-darkPrimary mb-4">Delete Item</h3>
				<p className="text-lighttext dark:text-darktext w-[30rem]">
					Are you sure you want to delete this cabin permanently? This action cannot be undone.
				</p>
				<div className="flex justify-end gap-6 px-8 mt-6">
					<button className="dark:hover:text-darkPrimary hover:text-primary duration-300 transition-colors  py-2 px-6 dark:hover:bg-darkSecondBg flex items-center justify-center rounded-md border-2 border-transparent dark:border-darkPrimary dark:focus:border-darkPrimary dark:focus:bg-darkSecondBg dark:focus:text-darkPrimary focus:text-primary border-primary focus:border-primary ">
						Cancel
					</button>
					<button>Delete</button>
				</div>
			</div>
		</div>
	)
}

export default DeleteModal
