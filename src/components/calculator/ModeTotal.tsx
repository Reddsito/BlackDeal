import { motion } from "framer-motion";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useCalculatorStore } from "@/stores/calculatorStore";

const ModeTotal = () => {
	const {
		totalPrice,
		productListUrl,
		calculationResult,
		setTotalPrice,
		setProductListUrl,
		handleTotalCalculation,
	} = useCalculatorStore();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<Input
				type="number"
				value={totalPrice}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setTotalPrice(e.target.value)
				}
				placeholder="Ingrese el precio total"
			/>
			<Input
				type="url"
				value={productListUrl}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setProductListUrl(e.target.value)
				}
				placeholder="URL de la lista de productos (opcional)"
			/>
			<Button
				onClick={handleTotalCalculation}
				className="w-full bg-red-600 text-white hover:bg-red-700 mb-4">
				Calcular Descuento
			</Button>
			{calculationResult && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-black text-center mt-4">
					Precio con descuento:{" "}
					<span className="font-bold text-2xl">${calculationResult}</span>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ModeTotal;
