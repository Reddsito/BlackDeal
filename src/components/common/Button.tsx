import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	className?: string;
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => (
	<motion.button
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
		onClick={onClick}
		className={`px-4 py-2 rounded-lg transition-colors duration-300 ${className}`}>
		{children}
	</motion.button>
);

export default Button;
