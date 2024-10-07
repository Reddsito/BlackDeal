import Link from "next/link";

const Footer = () => (
	<footer className="bg-black text-white p-8">
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 className="text-xl font-bold mb-4">
					Black<span className="text-red-600">Deal</span>
				</h3>
				<p>Ofreciendo los mejores descuentos en línea.</p>
			</div>
			<div>
				<h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
				<ul className="space-y-2">
					<li>
						<Link
							href="#"
							className="hover:text-red-600 transition-colors duration-300">
							Inicio
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="hover:text-red-600 transition-colors duration-300">
							Calculadora
						</Link>
					</li>
					<li>
						<Link
							href="#"
							className="hover:text-red-600 transition-colors duration-300">
							Contacto
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<h4 className="text-lg font-semibold mb-4">Síguenos</h4>
				<div className="flex space-x-4">
					<Link
						href="#"
						className="hover:text-red-600 transition-colors duration-300">
						Facebook
					</Link>
					<Link
						href="#"
						className="hover:text-red-600 transition-colors duration-300">
						Twitter
					</Link>
					<Link
						href="#"
						className="hover:text-red-600 transition-colors duration-300">
						Instagram
					</Link>
				</div>
			</div>
		</div>
		<div className="mt-8 text-center">
			<p>&copy; 2024 BlackDeal. Todos los derechos reservados.</p>
		</div>
	</footer>
);
export default Footer;
