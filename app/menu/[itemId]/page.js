import Container from '@/app/_components/Container'
import EditMenuItem from '@/app/_components/EditMenuItem'
import supabase from '@/app/_services/supabase'

async function EditItem({ params }) {
	const { itemId } = params

	const { data: menuItem, error } = await supabase.from('menu').select('*').eq('id', itemId).single()

	if (error) {
		return <div>Błąd: nie ma takiego menu</div>
	}

	return (
		<main className="bg-secondBg w-full py-12 px-6 md:px-12 overflow-auto dark:bg-darkSecondBg h-full">
			<Container>
				<EditMenuItem menuItem={menuItem} />
			</Container>
		</main>
	)
}

export default EditItem
