/* Hooks */
import { useState } from 'react';
/* React Router */
import { NavLink } from 'react-router-dom';
/* Imagenes */
import logo from '../assets/AluraFlix.webp';
/* Icons */
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';

export const NavBar = () => {
	const [open, setOpen] = useState(false);

	const toggleButton = () => {
		setOpen(!open);
	};

	const navLinks = [
		{
			id: 'videos',
			title: 'Videos',
			link: '/allvideos'
		},
		{
			id: 'categorias',
			title: 'Categorias',
			link: '/allcategorias'
		},
		{
			id: 'nueva_categoria',
			title: 'Nueva Categoria',
			link: '/nuevacategoria'
		},
		{
			id: 'nuevo_video',
			title: 'Nuevo Video',
			link: '/nuevovideo'
		}
	];

	return (
		<section>
			<nav className='font-code bg-encabezado w-full flex py-6 justify-between items-center navbar p-2 font-700'>
				{/* Logo */}
				<NavLink to='/'>
					<img className='w-40' src={logo} alt='logo' />
				</NavLink>

				{/* Desktop Navigation */}
				<ul className='text-textoPrincipal list-none sm:flex hidden justify-end items-center flex-1'>
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px]  ${
								index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
							}`}>
							<NavLink key={nav.id} to={nav.link} className='hover:font-700'>
								{nav.title}
							</NavLink>
						</li>
					))}
				</ul>

				{/* Mobile Navigation */}
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<div
						alt='menu'
						className='w-[28px] h-[28px] object-contain text-white'
						onClick={toggleButton}>
						{open ? <AiFillCloseCircle /> : <AiOutlineMenu />}
					</div>

					{/* Sidebar */}
					<div
						className={`${
							!open ? 'hidden' : 'flex'
						} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-encabezado text-textoPrincipal`}>
						<ul className='list-none flex justify-end items-start flex-1 flex-col'>
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
									}`}>
									<NavLink
										key={nav.id}
										to={nav.link}
										className='hover:font-700'>
										{nav.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
};
