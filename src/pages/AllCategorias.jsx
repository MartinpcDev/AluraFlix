/* Hooks */
import { useEffect, useState } from 'react';
/* React Router */
import { Link } from 'react-router-dom';
/* Model */
import { getData } from '../model/videoModel';
/* Icons */
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export const AllCategorias = () => {
	//TODO hacer la vista editCategoria y la opcion eliminar categoria
	const [categorias, setCategorias] = useState([]);
	useEffect(() => {
		getData('/categorias', setCategorias);
	}, []);

	const headers = [
		{
			nombre: 'categoria',
			elemento: 'Categoria'
		},
		{
			nombre: 'descripcion',
			elemento: 'Descripcion'
		},
		{
			nombre: 'color',
			elemento: 'Color'
		},
		{
			nombre: 'edit',
			elemento: <span className='sr-only'>Edit</span>
		},
		{
			nombre: 'delete',
			elemento: <span className='sr-only'>Delete</span>
		}
	];

	return (
		<section className='bg-fondoPrincipal w-full p-10 h-screen'>
			<div className='w-full relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='bg-fondoVideo w-full text-sm text-left text-gray-500'>
					<thead className='text-xs text-textoPrincipal uppercase'>
						<tr>
							{headers.map(head => (
								<th key={head.nombre} scope='col' className='px-6 py-3'>
									{head.elemento}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='text-textoSecundario'>
						{categorias.map(categoria => (
							<tr className='border-b hover:bg-gray-900' key={categoria.id}>
								<th
									scope='row'
									className='px-6 py-4 font-medium  whitespace-nowrap'>
									{categoria.nombre}
								</th>
								<td className='px-6 py-4'>{categoria.descripcion}</td>
								<td
									className='px-6 py-4'
									style={{ backgroundColor: `${categoria.color}` }}></td>
								<td className='px-6 py-4 text-right'>
									<Link className='text-2xl font-700 text-textoSecundario hover:text-yellow-500'>
										<AiFillEdit />
									</Link>
								</td>
								<td className='px-6 py-4 text-right'>
									<button className='text-2xl font-700 text-textoSecundario hover:text-red-600'>
										<AiFillDelete />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};
