import OrderStats from './_components/OrderStats'

export default function Home() {
	return (
		<main className="bg-secondBg w-full h-full py-12 px-8 dark:bg-darkSecondBg overflow-x-auto 2xl:overflow-x-hidden ">
			<div className="w-full max-w-7xl mx-auto">
				<OrderStats />
			</div>
		</main>
	)
}
