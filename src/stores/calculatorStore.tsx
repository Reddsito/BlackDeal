import { create } from "zustand";
import { calculateDiscount } from "@/lib/calculate-discount";
import Product from "@/types/product";

interface CalculatorState {
	totalPrice: string;
	productListUrl: string;
	products: Product[];
	newProductName: string;
	newProductPrice: string;
	newProductUrl: string;
	calculationResult: string;

	isModalOpen: boolean;

	setTotalPrice: (price: string) => void;
	setProductListUrl: (url: string) => void;
	setNewProductName: (name: string) => void;
	setNewProductPrice: (price: string) => void;
	setNewProductUrl: (url: string) => void;
	setCalculationResult: (result: string) => void;

	openModal: () => void;
	closeModal: () => void;

	handleAddProduct: () => void;
	handleRemoveProduct: (index: number) => void;
	calculateTotal: () => string;
	handleTotalCalculation: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
	totalPrice: "",
	productListUrl: "",
	products: [],
	newProductName: "",
	newProductPrice: "",
	newProductUrl: "",
	calculationResult: "",

	isModalOpen: false,

	setTotalPrice: (price) => set(() => ({ totalPrice: price })),
	setProductListUrl: (url) => set(() => ({ productListUrl: url })),
	setNewProductName: (name) => set(() => ({ newProductName: name })),
	setNewProductPrice: (price) => set(() => ({ newProductPrice: price })),
	setNewProductUrl: (url) => set(() => ({ newProductUrl: url })),
	setCalculationResult: (result) => set(() => ({ calculationResult: result })),

	openModal: () => set(() => ({ isModalOpen: true })),
	closeModal: () => set(() => ({ isModalOpen: false })),

	handleAddProduct: () => {
		const { newProductName, newProductPrice, newProductUrl, products } = get();
		if (newProductPrice && newProductName) {
			const price = parseFloat(newProductPrice);
			const discount = calculateDiscount(price);
			set({
				products: [
					...products,
					{
						name: newProductName,
						price: price,
						discount,
						url: newProductUrl,
					},
				],
				newProductName: "",
				newProductPrice: "",
				newProductUrl: "",
			});
		}
	},

	handleRemoveProduct: (index: number) => {
		set((state) => ({
			products: state.products.filter((_, i) => i !== index),
		}));
	},

	calculateTotal: () => {
		const products = get().products;
		return products
			.reduce((sum, product) => sum + parseFloat(product.discount), 0)
			.toFixed(2);
	},

	handleTotalCalculation: () => {
		const totalPrice = parseFloat(get().totalPrice);
		const discountedPrice = calculateDiscount(totalPrice);
		set(() => ({ calculationResult: `${discountedPrice}` }));
	},
}));
