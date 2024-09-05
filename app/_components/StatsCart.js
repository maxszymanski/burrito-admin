function StatsCart({ children, title, quantity }) {
	return (
		<div className="w-[23rem] h-48 bg-white rounded-lg shrink-0">
			<div className="flex items-center gap-4 p-7">
				<div className=" rounded-full bg-pink-200 p-3">{children}</div>
				<div className="flex flex-col justify-between text-gray-500 font-medium ">
					<p>{title}</p>
					<p className="text-gray-700 font-bold text-2xl">{quantity}</p>
				</div>
			</div>
			<div>wykres</div>
		</div>
	)
}

export default StatsCart
