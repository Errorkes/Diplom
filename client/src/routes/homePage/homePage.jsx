import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import { AuthContext } from '../../context/AuthContext';
import './homePage.scss';

function HomePage() {
	const { currentUser } = useContext(AuthContext);

	console.log(currentUser);
	return (
		<div className='homePage'>
			<div className='textContainer'>
				<div className='wrapper'>
					<h1 className='title'>
						Найдите недвижимость и получите место своей мечты
					</h1>
					<p>
						Обретите свое идеальное жилье с нами. Широкий выбор по доступным
						ценам. Наши специалисты помогут вам на каждом этапе сделки.
						Приглашаем вас создать свой уголок счастья уже сегодня!
					</p>
					<SearchBar />
					<div className='boxes'>
						<div className='box'>
							<h1>11+</h1>
							<h2>Лет опыта</h2>
						</div>
						<div className='box'>
							<h1>155</h1>
							<h2>Получено наград</h2>
						</div>
						<div className='box'>
							<h1>100+</h1>
							<h2>Готового жилья</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='imgContainer'>
				<img src='/bg.png' alt='' />
			</div>
		</div>
	);
}

export default HomePage;
