import { motion, AnimatePresence } from "framer-motion";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import ProductItem from "@/components/ProductItem";
import { Plus } from "lucide-react";
import { useCalculatorStore } from "@/stores/calculatorStore";

const ModeProduct = () => {
	const {
		products,
		newProductName,
		newProductPrice,
		newProductUrl,
		setNewProductName,
		setNewProductPrice,
		setNewProductUrl,
		handleAddProduct,
		handleRemoveProduct,
		calculateTotal,
	} = useCalculatorStore();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<Input
				type="text"
				value={newProductName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setNewProductName(e.target.value)
				}
				placeholder="Nombre del producto"
			/>
			<Input
				type="url"
				value={newProductUrl}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setNewProductUrl(e.target.value)
				}
				placeholder="URL del producto"
			/>
			<div className="flex mb-4">
				<Input
					type="number"
					value={newProductPrice}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setNewProductPrice(e.target.value)
					}
					placeholder="Precio del producto"
					className="flex-grow rounded-r-none"
				/>
				<Button
					onClick={handleAddProduct}
					className="bg-red-600 text-white hover:bg-red-700 rounded-l-none">
					<Plus size={24} />
				</Button>
			</div>
			<AnimatePresence>
				{products.map((product, index) => (
					<ProductItem
						key={index}
						product={product}
						onRemove={() => handleRemoveProduct(index)}
						index={index}
					/>
				))}
			</AnimatePresence>
			{products.length > 0 && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-black text-center mt-4">
					Total con descuento:{" "}
					<span className="font-bold text-2xl">${calculateTotal()}</span>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ModeProduct;
