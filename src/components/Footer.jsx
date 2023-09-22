/* Icons */
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
/* Imagenes */
import Logo from '../assets/AluraFlix.webp';

export const Footer = () => {
	return (
		<footer className='grid place-items-center bg-encabezado font-400 font-code text-textoSecundario gap-4 p-4'>
			<img className='w-40' src={Logo} alt='logo' />
			<div className='text-center'>
				<h2 className='pb-4'>©Desarrollado por Martin Palomino</h2>
				<div className='flex flex-row justify-center content-center'>
					<a href='https://github.com/MartinChristopherPC' target='_blank'>
						<AiFillGithub className='w-8 h-auto' />
					</a>

					<a
						href='https://www.linkedin.com/in/martinchris-palomino/'
						target='_blank'>
						<AiFillLinkedin className='w-8 h-auto' />
					</a>
				</div>
			</div>
		</footer>
	);
};
