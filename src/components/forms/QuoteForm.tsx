import { motion } from "framer-motion";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";

const QuoteForm = () => {
	const [noMailbox, setNoMailbox] = useState(false);
	const [step, setStep] = useState(1);

	const handleNextStep = () => {
		if (step === 1) setStep(2);
	};

	const handlePreviousStep = () => {
		if (step === 2) setStep(1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Enviando cotización...");
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="my-4 px-4 sm:px-0">
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				className="max-h-[75vh] px-5 overflow-auto">
				<form onSubmit={handleSubmit}>
					{step === 1 && (
						<div className="space-y-4 p-2 ">
							<h3 className="text-lg font-semibold border-b pb-2">
								Datos del Cliente
							</h3>
							<div>
								<label
									htmlFor="fullName"
									className="block text-sm font-medium text-gray-700 mb-1">
									Nombre completo *
								</label>
								<Input
									type="text"
									id="fullName"
									name="fullName"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-1">
									Correo electrónico *
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
									htmlFor="phone"
									className="block text-sm font-medium text-gray-700 mb-1">
									Número de teléfono *
								</label>
								<Input
									type="tel"
									id="phone"
									name="phone"
									required
								/>
							</div>
							<Button
								type="button"
								className="bg-red-600 text-white hover:bg-red-700 w-full"
								onClick={handleNextStep}>
								Siguiente
							</Button>
						</div>
					)}

					{step === 2 && (
						<div className="space-y-4 p-2">
							<h3 className="text-lg font-semibold border-b pb-2">
								Datos del Casillero
							</h3>
							<div className="flex items-center mb-4">
								<input
									type="checkbox"
									id="noMailbox"
									checked={noMailbox}
									onChange={(e) => setNoMailbox(e.target.checked)}
									className="h-4 w-4 text-red-600 focus:ring-red-500  border-gray-300 rounded "
								/>
								<label
									htmlFor="noMailbox"
									className="ml-2 block text-sm cursor-pointer text-gray-900 hover:text-gray-950">
									No tengo casillero
								</label>
							</div>
							<div>
								<label
									htmlFor="country"
									className="block text-sm font-medium text-gray-700 mb-1">
									País/Región {!noMailbox && "*"}
								</label>
								<Input
									type="text"
									id="country"
									name="country"
									required={!noMailbox}
									disabled={noMailbox}
								/>
							</div>
							<div>
								<label
									htmlFor="address"
									className="block text-sm font-medium text-gray-700 mb-1">
									Dirección {!noMailbox && "*"}
								</label>
								<Input
									type="text"
									id="address"
									name="address"
									required={!noMailbox}
									disabled={noMailbox}
								/>
							</div>
							<div>
								<label
									htmlFor="apt"
									className="block text-sm font-medium text-gray-700 mb-1">
									Apartamento, suite, unidad, etc.
								</label>
								<Input
									type="text"
									id="apt"
									name="apt"
									disabled={noMailbox}
								/>
							</div>
							<div>
								<label
									htmlFor="city"
									className="block text-sm font-medium text-gray-700 mb-1">
									Ciudad {!noMailbox && "*"}
								</label>
								<Input
									type="text"
									id="city"
									name="city"
									required={!noMailbox}
									disabled={noMailbox}
								/>
							</div>
							<div>
								<label
									htmlFor="state"
									className="block text-sm font-medium text-gray-700 mb-1">
									Estado/Provincia {!noMailbox && "*"}
								</label>
								<Input
									type="text"
									id="state"
									name="state"
									required={!noMailbox}
									disabled={noMailbox}
								/>
							</div>
							<div>
								<label
									htmlFor="zipCode"
									className="block text-sm font-medium text-gray-700 mb-1">
									Código Postal {!noMailbox && "*"}
								</label>
								<Input
									type="text"
									id="zipCode"
									name="zipCode"
									required={!noMailbox}
									disabled={noMailbox}
								/>
							</div>
							<div className="flex justify-between">
								<Button
									type="button"
									className="bg-gray-600 text-white hover:bg-gray-700"
									onClick={handlePreviousStep}>
									Atrás
								</Button>
								<Button
									type="submit"
									className="bg-red-600 text-white hover:bg-red-700">
									Enviar Cotización
								</Button>
							</div>
						</div>
					)}
				</form>
			</motion.div>
		</motion.div>
	);
};

export default QuoteForm;
