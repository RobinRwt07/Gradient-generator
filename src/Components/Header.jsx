import Logo from '../assets/logo.png';
const Header = () => {
	return (
		<header className="bg-white p-3 shadow-sm flex gap-2 items-center md:p-4 ">
			<img src={Logo} alt='Logo' className='w-14 h-14 object-contain' />
			<h2 className='flex-auto text-center text-xl tracking-wide font-bold text-cyan-800'>Gradient Generator</h2>
		</header>
	)
}

export default Header