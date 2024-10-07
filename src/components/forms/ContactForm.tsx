import Button from "../common/Button";
import Input from "../common/Input";

const ContactForm = () => (
	<div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
		<h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
		<form className="space-y-4">
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700 mb-1">
					Nombre
				</label>
				<Input
					type="text"
					id="name"
					name="name"
					required
				/>
			</div>
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700 mb-1">
					Correo electrónico
				</label>
				<Input
					type="email"
					id="email"
					name="email"
					required
				/>
			</div>
			<div>
				<label
					htmlFor="message"
					className="block text-sm font-medium text-gray-700 mb-1">
					Mensaje
				</label>
				<textarea
					id="message"
					name="message"
					rows={4}
					className="w-full p-2 mb-4 rounded-lg border border-black text-black focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
					required></textarea>
			</div>
			<Button
				type="submit"
				className="w-full bg-red-600 text-white hover:bg-red-700">
				Enviar Mensaje
			</Button>
		</form>
	</div>
);

export default ContactForm;
