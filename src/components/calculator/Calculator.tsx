"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { Calculator as CalcIcon, ShoppingCart } from "lucide-react";
import ModeTotal from "@/components/calculator/ModeTotal";
import ModeProduct from "@/components/calculator/ModeProduct";
import { useState } from "react";
import { useCalculatorStore } from "@/stores/calculatorStore";

import QuoteModal from "../modals/QuoteModal";

const Calculator = () => {
	const [mode, setMode] = useState<"total" | "individual">("total");
	const { openModal } = useCalculatorStore();

	return (
		<main className="flex-grow flex items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className=" p-8 rounded-lg shadow-xl w-full max-w-2xl border border-black">
				<h1 className="text-3xl font-bold text-black mb-6 text-center flex items-center justify-center">
					Black<span className="text-red-600">Deal</span>
				</h1>
				<div className="mb-6 flex justify-center space-x-4">
					<Button
						onClick={() => setMode("total")}
						className={`flex items-center ${
							mode === "total"
								? "bg-red-600 text-white"
								: "bg-black text-white hover:bg-red-600"
						}`}>
						<CalcIcon className="mr-2" /> Total
					</Button>
					<Button
						onClick={() => setMode("individual")}
						className={`flex items-center ${
							mode === "individual"
								? "bg-red-600 text-white"
								: "bg-black text-white hover:bg-red-600"
						}`}>
						<ShoppingCart /> Individual
					</Button>
				</div>

				{mode === "total" ? <ModeTotal /> : <ModeProduct />}
				<Button
					onClick={() => openModal()}
					className="w-full bg-black text-white hover:bg-red-600 mt-6">
					Solicitar Cotización
				</Button>
				<QuoteModal />
			</motion.div>
		</main>
	);
};

export default Calculator;
