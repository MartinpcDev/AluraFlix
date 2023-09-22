/* Hooks */
import { useEffect, useState } from 'react';
/* Model */
import { getData } from '../model/videoModel';
/* Componentes */
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
