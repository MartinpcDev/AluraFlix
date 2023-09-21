import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { VideoCard } from './VideoCard';

export const CategoriaSection = ({ videos, categoria }) => {
	//TODO Terminar el Carrousel con los videos
	return (
		<div className='w-full mb-4' id={categoria.categoria}>
			<div
				className={`flex justify-between gap-1 content-center border-b-2 border-solid`}
				style={{ borderColor: `${categoria.color}` }}>
				<h2
					className={`font-700 w-max p-4 text-ellipsis whitespace-nowrap`}
					style={{ backgroundColor: `${categoria.color}` }}>
					{categoria.categoria}
				</h2>
			</div>
			<div className='pt-4'>
				<Swiper
					key={categoria.id}
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
					{videos.map(video =>
						videos.length === 0 ? (
							<p className='text-textoPrincipal text-2xl'>No hay videos</p>
						) : (
							categoria.categoria === video.categoria && (
								<SwiperSlide key={video.id}>
									<VideoCard video={video} />
								</SwiperSlide>
							)
						)
					)}
				</Swiper>
			</div>
		</div>
	);
};
