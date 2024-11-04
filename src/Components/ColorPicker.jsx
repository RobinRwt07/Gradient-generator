import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
import { useColorStore } from "../Store";
import tinycolor from "tinycolor2";

const ColorPicker = ({ color = "#000000", handlePickerClose, type = "add", setColor }) => {
	const updateColor = useColorStore((state) => state.updateColor);
	function handleColorChange(event) {
		const hexColor = tinycolor(event.rgb).toHex8String();
		setColor(hexColor);
	}

	function handleColorUpdate(event) {
		if (type === "update") {
			const hexColor = tinycolor(event.rgb).toHex8String();
			updateColor(color, hexColor);
		}
	}

	return (
		<div className="absolute z-10">
			<div onClick={handlePickerClose} className="fixed inset-0 " />
			<ChromePicker color={color} onChangeComplete={handleColorChange} onChange={handleColorUpdate} disableAlpha={false} />
		</div>
	)
}
ColorPicker.propTypes = {
	color: PropTypes.string,
	handleColorChange: PropTypes.func,
	handlePickerClose: PropTypes.func,
	setColor: PropTypes.func,
	type: PropTypes.string
}

export default ColorPicker;