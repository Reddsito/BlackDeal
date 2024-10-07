const Input = ({ ...props }) => (
	<input
		{...props}
		className="w-full p-2 mb-4 rounded-lg border border-black text-black focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
	/>
);

export default Input;
