import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo-md.webp'

function Navigation() {
	return (
		<nav className="py-7 px-4 border-r border-slate-200 w-80">
			<h1 className="text-5xl text-pink-500 font-bold tracking-widest text-center ">
				{/* <Image src={Logo} alt="logo firmy" /> */}Burrito
			</h1>
			<ul className="flex flex-col gap-6 pt-12 font-medium text-gray-500 text-xl">
				<li className="hover:bg-pink-300 transition-colors duration-300 hover:text-pink-600  rounded-2xl">
					<Link className=" w-full  block py-2.5 px-4 " href="/">
						Dashboard
					</Link>
				</li>
				<li className="hover:bg-pink-300 transition-colors duration-300 hover:text-pink-600  rounded-2xl">
					<Link className=" w-full  block py-2.5 px-4 " href="/menu">
						Menu
					</Link>
				</li>
				<li className="hover:bg-pink-300 transition-colors duration-300 hover:text-pink-600 rounded-2xl">
					<Link className=" w-full  block py-2.5 px-4 " href="/orders">
						Orders
					</Link>
				</li>
				<li className="hover:bg-pink-300 transition-colors duration-300 hover:text-pink-600 rounded-2xl">
					<Link className=" w-full  block py-2.5 px-4 " href="/customers">
						Customers
					</Link>
				</li>
				<li className="hover:bg-pink-300 transition-colors duration-300 hover:text-pink-600 rounded-2xl">
					<Link className=" w-full  block py-2.5 px-4 " href="/settings">
						Settings
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
