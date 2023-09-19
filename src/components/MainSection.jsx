import { useEffect, useState } from 'react';
import { getData } from '../api/api';
import { CategoriaSection } from './CategoriaSection';

export const MainSection = ({ urlVideos, urlCategorias }) => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		getData(urlVideos, setVideos);
	}, [urlVideos]);

	const [categorias, setCategorias] = useState([]);
	useEffect(() => {
		getData(urlCategorias, setCategorias);
	}, [urlCategorias]);

	// console.log(videos);
	// console.log(categorias);

	return (
		<section className='bg-fondoPrincipal font-code p-4'>
			{categorias.map(categoria => (
				<CategoriaSection
					key={categoria.id}
					videos={videos}
					categoria={categoria}
				/>
			))}
		</section>
	);
};
