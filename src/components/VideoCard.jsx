/* React Router */
import { Link, useNavigate } from 'react-router-dom';
/* Icons */
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
/* Model */
import { deleteData } from '../model/videoModel';

export const VideoCard = ({ video, opciones }) => {
	let url = '/videos';
	const navigate = useNavigate();
	const handleDelete = id => {
		deleteData(`${url}/${id}`).then(response => navigate('/'));
	};

	return (
		<div className='w-[300px] h-[270px] bg-encabezado max-w-sm border border-gray-200 rounded-lg shadow p-4'>
			{opciones && (
				<div className='text-textoPrincipal flex justify-evenly content-center'>
					<Link to={`/editvideo/${video.id}`}>
						<AiFillEdit className='text-2xl hover:text-yellow-400' />
					</Link>
					<AiFillDelete
						onClick={() => handleDelete(video.id)}
						className='text-2xl hover:text-red-600'
					/>
				</div>
			)}
			<div>
				<img
					className='p-4 rounded-t-lg'
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
