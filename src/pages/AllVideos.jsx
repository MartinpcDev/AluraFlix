/* Hooks */
import { useEffect, useState } from 'react';
/* Model */
import { getData } from '../model/videoModel';
/* Componentes */
import { VideoCard } from '../components/VideoCard';

export const AllVideos = () => {
	const [videos, setVideos] = useState([]);
	let url = '/videos';
	useEffect(() => {
		getData(url, setVideos);
	}, [url]);
	return (
		<section className='bg-fondoPrincipal w-full h-auto text-textoPrincipal'>
			<div className='flex flex-row gap-2 flex-wrap p-5'>
				{videos.map(video => (
					<VideoCard key={video.id} video={video} opciones={true} />
				))}
			</div>
		</section>
	);
};
