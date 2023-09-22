/* React Router */
import { Link } from 'react-router-dom';

export const VideoCard = ({ video }) => {
	return (
		<div className='w-[300px] h-[270px] bg-encabezado max-w-sm border border-gray-200 rounded-lg shadow p-4'>
			<div>
				<img
					className='p-8 rounded-t-lg'
					src={video.imagen}
					alt='product image'
				/>
			</div>
			<div className='flex items-center justify-between'>
				<span className='text-xs text-textoPrincipal'>{video.titulo}</span>
				<Link
					to={`/videos/${video.id}`}
					className='text-fondoVideo bg-botones focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs text-center pr-4 pl-4 hover:font-700'>
					Ver Video
				</Link>
			</div>
		</div>
	);
};
