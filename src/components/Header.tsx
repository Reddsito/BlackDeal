import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => (
	<nav className="bg-black text-white p-4">
		<div className="container mx-auto flex justify-between items-center">
			<div className="text-2xl font-bold">
				Black<span className="text-red-600">Deal</span>
			</div>
			<div className="hidden md:flex space-x-4">
				<Link
					href="#"
					className="hover:text-red-600 transition-colors duration-300">
					Inicio
				</Link>
				<Link
					href="#"
					className="hover:text-red-600 transition-colors duration-300">
					Calculadora
				</Link>
				<Link
					href="#"
					className="hover:text-red-600 transition-colors duration-300">
					Contacto
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<button className="hover:text-red-600 transition-colors duration-300">
					<Search size={20} />
				</button>
				<button className="hover:text-red-600 transition-colors duration-300">
					<User size={20} />
				</button>
				<button className="hover:text-red-600 transition-colors duration-300">
					<ShoppingBag size={20} />
				</button>
				<button className="md:hidden hover:text-red-600 transition-colors duration-300">
					<Menu size={20} />
				</button>
			</div>
		</div>
	</nav>
);

export default Navbar;
