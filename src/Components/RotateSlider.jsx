import { useColorStore } from "../Store";

const RotateSlider = () => {
	const updateRotateAngle = useColorStore((state) => state.updateRotateAngle);
	const gradientType = useColorStore(state => state.gradientType);
	function handleChangeDirection(event) {
		updateRotateAngle(event.target.value)
	}

	return (
		gradientType === 'linear' &&
		<div className='flex items-center flex-none gap-4 bg-slate-100 p-4 rounded-md  sm:p-6' >
			<h3 className="font-bold text-md items-center">Direction :</h3>
			<input className="angle-slider" type="range" name="slider" id="slider" max={360} min={0} onChange={handleChangeDirection} />
		</div >
	)
}

export default RotateSlider;