import CodePreview from "./Components/CodePreview"
import GradientPreview from "./Components/GradientPreview"
import GradientTypes from "./Components/GradientTypes"
import Header from "./Components/Header"
import RotateSlider from "./Components/RotateSlider"
import SelectedColors from "./Components/SelectedColors"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <div className="box flex gap-4 flex-col *:flex-1  lg:flex-row">
          <GradientPreview />
          <div>
            <CodePreview />
            <RotateSlider />
          </div>
        </div>
        <GradientTypes />
        <SelectedColors />
      </div>
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default App
