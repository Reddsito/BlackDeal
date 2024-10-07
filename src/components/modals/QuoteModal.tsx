import { useCalculatorStore } from "@/stores/calculatorStore";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import QuoteForm from "../forms/QuoteForm";

const QuoteModal = () => {
	const { isModalOpen, closeModal } = useCalculatorStore();

	return (
		<Dialog
			modal
			defaultOpen={isModalOpen}
			open={isModalOpen}
			onOpenChange={closeModal}>
			<DialogContent>
				<DialogHeader>
					<h2 className="text-2xl font-bold text-center">
						Solicitar Cotización
					</h2>
				</DialogHeader>
				<QuoteForm />
			</DialogContent>
		</Dialog>
	);
};

export default QuoteModal;
