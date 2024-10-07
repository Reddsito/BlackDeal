import { motion } from "framer-motion";
import {
	DollarSign,
	Link as LinkIcon,
	Minus,
	Package,
	ShoppingCart,
} from "lucide-react";
import Product from "../types/product";
import Link from "next/link";

interface ProductItemProps {
	product: Product;
	onRemove: (index: number) => void;
	index: number;
}

const ProductItem = ({ product, onRemove, index }: ProductItemProps) => (
	<motion.div
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		className="mb-2 bg-gray-100 text-black p-4 rounded-lg shadow relative">
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => onRemove(index)}
			className="absolute top-2 right-2 text-red-600">
			<Minus size={20} />
		</motion.button>
		<div className="grid grid-cols-2 gap-2">
			<div className="col-span-2 sm:col-span-1 font-bold flex items-center">
				<ShoppingCart
					size={16}
					className="mr-2"
				/>
				{product.name}
			</div>
			<div className="col-span-2 sm:col-span-1 flex items-center justify-start sm:justify-end">
				{product.url && (
					<Link
						href={product.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline flex items-center">
						<LinkIcon
							size={16}
							className="mr-1"
						/>
						Ver producto
					</Link>
				)}
			</div>
			<div className="flex items-center">
				<DollarSign
					size={16}
					className="mr-1"
				/>
				Precio: {product.price}
			</div>
			<div className="flex items-center justify-start sm:justify-end">
				<Package
					size={16}
					className="mr-1"
				/>
				Descuento:{" "}
				<span className="text-red-600 font-bold ml-1">{product.discount}</span>
			</div>
		</div>
	</motion.div>
);

export default ProductItem;
