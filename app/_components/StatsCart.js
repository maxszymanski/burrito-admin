function StatsCart({ children, title, quantity }) {
	return (
		<div className="w-52 xl:w-1/5 h-48 bg-white rounded-lg shrink-0 dark:bg-darkbg border border-slate-200 dark:border-darkborder">
			<div className="flex items-center gap-4 p-6">
				<div className=" rounded-full bg-pink-200 dark:bg-darktext p-3">{children}</div>
				<div className="flex flex-col justify-between text-gray-500 font-medium dark:text-darkPrimary">
					<p>{title}</p>
					<p className="text-gray-700 font-bold xl:text-2xl dark:text-darktext">{quantity}</p>
				</div>
			</div>
			<div>wykres</div>
		</div>
	)
}

export default StatsCart
