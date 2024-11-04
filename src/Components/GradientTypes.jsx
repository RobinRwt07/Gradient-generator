import { useColorStore } from "../Store";

const GradientTypes = () => {
	const gradientTypes = ['linear', 'radial', 'conical'];
	const changeGradientType = useColorStore(state => state.changeGradientType);
	function handleClick(type) {
		changeGradientType(type);
	}

	return (
		<div className="box">
			<div className="flex justify-center items-center flex-wrap gap-6 ">
				{
					gradientTypes.map((type, index) => (
						<button type="button" key={index} onClick={() => handleClick(type)} className="appearance-none border text-md border-gray-600 px-6 py-1 font-bold rounded-md capitalize bg-slate-100">{type}</button>
					))
				}
			</div>
		</div>
	)
}

export default GradientTypes