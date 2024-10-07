import Navbar from "@/components/Header";

import Footer from "@/components/Footer";
import Calculator from "@/components/calculator/Calculator";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-white">
			<Navbar />
			<Calculator />
			<Footer />
		</div>
	);
}
