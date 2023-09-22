/* Componentes */
import { Hero } from '../components/Hero';
import { MainSection } from '../components/MainSection';

export const Home = () => {
	const urlVideos = '/videos';
	const urlCategorias = '/categorias';
	return (
		<>
			<Hero />
			<MainSection urlVideos={urlVideos} urlCategorias={urlCategorias} />
		</>
	);
};
