import { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { getData } from '../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VideoCard } from '../components/VideoCard';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export const VerVideo = () => {
	const [video, setVideo] = useState([]);
	const [relacionados, setRelacionados] = useState([]);

	const url = useResolvedPath('').pathname;

	useEffect(() => {
		getData(url, setVideo);
	}, []);

	useEffect(() => {
		getData(`/videos/?categoria=${video.categoria}`, setRelacionados);
	});

	return (
		<section className='w-full h-auto bg-fondoPrincipal font-code p-4 text-textoPrincipal flex flex-col justify-center content-center'>
			<div className='m-auto w-full h-[60%] flex flex-row justify-center items-center overflow-auto'>
				<div className='w-[70%] pr-4'>
					<h1 className='h-[10%] font-700 text-2xl pb-4'>{video.titulo}</h1>
					<iframe
						className='w-full h-[450px] pb-4'
						src={video.url}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>
				</div>
				<h1 className='w-[20%] h-[150px] text-center'>{video.descripcion}</h1>
			</div>
			<div className=' w-full h-[40%]'>
				<h1 className='font-700 text-2xl pt-4'>Videos Relacionados</h1>
				<div className='pt-4'>
					<Swiper
						className='w-full pt-[50px] pb-[50px]'
						effect={'coverflow'}
						spaceBetween={10}
						slidesPerView={1}
						centeredSlides={true}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 10
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 10
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 20
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 40
							}
						}}
						autoplay={{ delay: 2500, disableOnInteraction: false }}
						pagination={{
							clickable: true
						}}
						navigation={true}
						loop={true}
						modules={[Autoplay, Pagination, Navigation]}>
						{relacionados.map(
							relacionado =>
								relacionado.id !== video.id && (
									<SwiperSlide key={relacionado.id}>
										<VideoCard video={relacionado} />
									</SwiperSlide>
								)
						)}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
