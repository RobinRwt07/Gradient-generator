import { useColorStore } from "../Store"
import { useRef } from "react";
import { toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";

const CodePreview = () => {
	const ref = useRef();
	const gradientType = useColorStore(state => state.gradientType);
	const gradientColors = useColorStore(state => state.colors);
	const rotateAngle = useColorStore(state => state.rotateAngle);


	const gradientString = gradientType === 'linear' ? `linear-gradient(${rotateAngle}deg, ${gradientColors.toString()})` :
		gradientType === 'radial' ? `radial-gradient(${gradientColors.toString()})` :
			`conic-gradient(${gradientColors.toString()})`;


	async function handleClick() {
		if (window.isSecureContext) {
			const clipboard = window.navigator.clipboard;
			try {
				await clipboard.writeText(ref.current.textContent);
				toast.success("Text copied");
			}
			catch (err) {
				console.error(err.message);
				toast.error("Failed to copy");
			}
		}
	}
	return (
		<div className="mb-4">
			<h3 className="text-sm font-bold mb-2">CSS Snippet :</h3>
			<div style={{ scrollbarWidth: "none" }} className="flex items-center justify-between gap-4 bg-slate-950 text-yellow-300 p-4 rounded-md shadow-md overflow-x-scroll sm:p-6">
				<code ref={ref}>background-image: {gradientString}</code>
				<button className="text-xl flex-none p-1 text-white" onClick={handleClick}>
					<FaCopy />
				</button>
			</div>
		</div>
	)
}

export default CodePreview