import Container from './_components/Container'
import OrderStats from './_components/OrderStats'

export default function Home() {
	return (
		<main className="bg-secondBg w-full h-full p-12  dark:bg-darkSecondBg overflow-x-auto">
			<Container>
				<OrderStats />
			</Container>
		</main>
	)
}
