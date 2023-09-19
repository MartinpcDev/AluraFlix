import { NavLink } from 'react-router-dom';
import Banner from '../assets/banner.png';

export const Hero = () => {
	return (
		<section
			className='font-code text-textoPrincipal w-full h-[60vh] flex justify-center items-center text-center font-700 overflow-x-auto'
			style={{
				backgroundImage: `url(${Banner})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}>
			<div className='w-1/2'>
				<h1 className='text-textoPrincipal text-2xl pb-1'>
					Videos para aprendizaje de programacion desde 0 👌
				</h1>
				<p className='mt-2 text-2xl pb-6 font-400'>
					Pagina que ofrece una cantidad de contenido multimedia para el
					aprendizaje sobre programacion 🚩
				</p>
				<NavLink
					className='bg-botones w-16 text-xl rounded-lg border-none p-2 text-fondoVideo font-400 hover:font-700'
					to='/allvideos'>
					Ver Todos los Videos
				</NavLink>
			</div>
		</section>
	);
};
