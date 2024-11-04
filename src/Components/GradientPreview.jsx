import tinycolor from "tinycolor2";
import { useColorStore } from "../Store";

const GradientPreview = () => {
	const gradientColors = useColorStore(state => state.colors);
	const rotateAngle = useColorStore(state => state.rotateAngle);
	const gradientType = useColorStore(state => state.gradientType);
	let gradientString = gradientType === 'linear' ? "linear-gradient" :
		gradientType === "conical" ? 'conic-gradient' : "radial-gradient";
	const hexColors = gradientColors.map(color => tinycolor(color).toHex8String());
	gradientString += gradientType === 'linear' ? `(${rotateAngle}deg, ${hexColors.toString()})` : `(${hexColors.toString()})`;
	return (

		<div className="mb-4">
			<div style={{ backgroundImage: gradientString }} className="max-w-sm aspect-[3/2] border shadow-md rounded-xl border-gray-300 mx-auto content-center">
				<p className="text-center">Select two or more colors</p>
			</div>
		</div>
	)
}

export default GradientPreview;