import supabase from './supabase'

export default async function getOrders() {
	const { data, error } = await supabase.from('orders').select('*')
	if (error) {
		console.error(error)
		throw new Error('Dane nie mogą zostać załadowane')
	}
	return data
}
