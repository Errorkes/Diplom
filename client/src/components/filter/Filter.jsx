import './Filter.scss';

function Filter() {
	return (
		<div className='filter'>
			<h1>
				Результаты поиска по <b>Москва</b>
			</h1>
			<div className='top'>
				<div className='item'>
					<label htmlFor='city'>Город</label>
					<input type='text' id='city' name='city' placeholder='Город' />
				</div>
			</div>
			<div className='bottom'>
				<div className='item'>
					<label htmlFor='type'>Тип продажи</label>
					<select name='type' id='type'>
						<option value=''>Любой</option>
						<option value='buy'>Покупка</option>
						<option value='rent'>Аренда</option>
					</select>
				</div>
				{/* <div className='item'>
					<label htmlFor='property'>Тип</label>
					<select name='property' id='property'>
						<option value=''>Любой</option>
						<option value='Апартаменты'>Apartment</option>
						<option value='Дом'>House</option>
					</select>
				</div> */}
				<div className='item'>
					<label htmlFor='minPrice'>Мин. цена</label>
					<input
						type='number'
						id='minPrice'
						name='minPrice'
						placeholder='Любая'
					/>
				</div>
				<div className='item'>
					<label htmlFor='maxPrice'>Макс. цена</label>
					<input
						type='text'
						id='maxPrice'
						name='maxPrice'
						placeholder='Любая'
					/>
				</div>
				<div className='item'>
					<label htmlFor='bedroom'>Кол-во спален</label>
					<input type='text' id='bedroom' name='bedroom' placeholder='Любое' />
				</div>
				<button>
					<img src='/search.png' alt='' />
				</button>
			</div>
		</div>
	);
}

export default Filter;
