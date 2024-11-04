import { useState } from "react";
import ColorPicker from "./ColorPicker";
import { useColorStore } from "../Store";
import { FaPlus, FaTrash } from "react-icons/fa";
const SelectedColors = () => {
	const gradientColors = useColorStore((state) => state.colors);
	const [displayColorPicker, setDisplayColorPicker] = useState({ active: false, type: 'add' });
	const addColor = useColorStore((state) => state.addColor);
	const removeColor = useColorStore(state => state.removeColor);
	const [color, setColor] = useState('#000000');


	function handleAddClick() {
		setDisplayColorPicker({ active: true, type: 'add' });
	}

	function handlePickerClose() {
		if (displayColorPicker.type === 'add') {
			addColor(color);
		}
		setDisplayColorPicker({ ...displayColorPicker, active: false });
	}

	function handleUpdateColor(color) {
		setDisplayColorPicker({ active: true, type: "update" });
		setColor(color);
	}
	return (
		<div className="box">
			<h3 className="text-md font-bold mb-2">Add Colors</h3>
			<div className="flex flex-wrap items-center gap-8 bg-slate-100 p-4 rounded-md  justify-center sm:p-6 ">
				<div className="flex flex-wrap items-center justify-center gap-3">
					{
						gradientColors.map((color, index) => {
							return (
								<div key={index} className="flex flex-col items-center justify-center gap-2">
									<div style={{ backgroundColor: color }} className="selectedColors group/box" onClick={() => handleUpdateColor(color)} />
									<button className="p-2 appearance-none text-lg font-extrabold bg-gray-200 rounded-md text-red-500 hover:bg-gray-300" onClick={() => removeColor(color)}>
										<FaTrash />
									</button>
								</div>
							)
						})
					}
				</div>
				<button type="button" onClick={handleAddClick} className="size-14 shrink-0 appearance-none bg-gray-200 shadow-md flex items-center justify-center rounded-md text-2xl hover:bg-gray-300">
					<FaPlus />
				</button>
				{
					displayColorPicker.active ?
						<ColorPicker color={color} handlePickerClose={handlePickerClose} type={displayColorPicker.type} setColor={setColor} />
						: null
				}
			</div>
		</div>
	)
}

export default SelectedColors