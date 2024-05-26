import { useState } from 'react';
import './SearchBar.scss';

const types = ['Покупка', 'Аренда'];

function SearchBar() {
	const [query, setQuery] = useState({
		type: 'buy',
		location: '',
		minPrice: 0,
		maxPrice: 0,
	});

	const switchType = value => {
		setQuery(prev => ({ ...prev, type: value }));
	};

	return (
		<div className='searchBar'>
			<div className='type'>
				{types.map(type => (
					<button
						key={type}
						onClick={() => switchType(type)}
						className={query.type === type ? 'active' : ''}
					>
						{type}
					</button>
				))}
			</div>
			<form>
				<input type='text' name='location' placeholder='Город' />
				<input
					type='number'
					name='minPrice'
					min={0}
					max={1000000000}
					placeholder='Мин. цена'
				/>
				<input
					type='number'
					name='maxPrice'
					min={0}
					max={1000000000}
					placeholder='Макс. цена'
				/>
				<button>
					<img src='/search.png' alt='' />
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
