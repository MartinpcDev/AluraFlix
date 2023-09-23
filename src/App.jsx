/* React Router */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
/* Pages */
import { NuevoVideo } from './pages/NuevoVideo';
import { EditVideo } from './pages/EditVideo';
import { NuevaCategoria } from './pages/NuevaCategoria';
import { EditCategoria } from './pages/EditCategoria';
import { AllVideos } from './pages/AllVideos';
import { AllCategorias } from './pages/AllCategorias';
import { VerVideo } from './pages/VerVideo';
import { Home } from './pages/Home';
/* Componentes */
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

export const App = () => {
	const rutas = [
		{
			name: 'home',
			path: '/',
			element: <Home />
		},
		{
			name: 'nuevo_video',
			path: '/nuevovideo',
			element: <NuevoVideo />
		},
		{
			name: 'nueva_categoria',
			path: '/nuevacategoria',
			element: <NuevaCategoria />
		},
		{
			name: 'all_videos',
			path: '/allvideos',
			element: <AllVideos />
		},
		{
			name: 'all_categorias',
			path: '/allcategorias',
			element: <AllCategorias />
		},
		{
			name: 'edit_video',
			path: '/editvideo/:id',
			element: <EditVideo />
		},
		{
			name: 'edit_categoria',
			path: '/editcategoria/:id',
			element: <EditCategoria />
		},
		{
			name: 'ver_video',
			path: '/videos/:id',
			element: <VerVideo />
		},
		{
			name: 'default',
			path: '/*',
			element: <Navigate to='/' />
		}
	];

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					{rutas.map(ruta => (
						<Route key={ruta.name} path={ruta.path} element={ruta.element} />
					))}
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};
