export const CategoriaSection = ({ videos, categoria }) => {
	return (
		<div className='w-full mb-4' id={categoria.categoria}>
			<div
				className='flex justify-between gap-1 content-center border-b-2 border-solid'
				style={{ borderColor: `${categoria.color}` }}>
				<h2
					className='font-700 w-max p-4 text-ellipsis whitespace-nowrap'
					style={{ backgroundColor: `${categoria.color}` }}>
					{categoria.categoria}
				</h2>
			</div>
		</div>
	);
};
