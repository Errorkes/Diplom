import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.scss';

function Navbar() {
	const [open, setOpen] = useState(false);

	const { currentUser } = useContext(AuthContext);

	return (
		<nav>
			<div className='left'>
				<a href='/' className='logo'>
					<img src='/logo.png' alt='' />
					<span>Scandinavian</span>
				</a>
				<a href='/'>Главная</a>
				<a href='/'>О нас</a>
				<a href='/'>Наши контакты</a>
				<a href='/'>Агенты</a>
			</div>
			<div className='right'>
				{currentUser ? (
					<div className='user'>
						<img src={currentUser.avatar || '/noavatar.jpg'} alt='' />
						<span>{currentUser.username}</span>
						<Link to='/profile' className='profile'>
							<div className='notification'>3</div>
							<span>Профиль</span>
						</Link>
					</div>
				) : (
					<>
						<a href='/login'>Вход</a>
						<a href='/register' className='register'>
							Регистрация
						</a>
					</>
				)}
				<div className='menuIcon'>
					<img
						src='/menu.png'
						alt=''
						onClick={() => setOpen(prev => !prev)}
					></img>
				</div>
				<div className={open ? 'menu active' : 'menu'}>
					<a href='/'>Главная</a>
					<a href='/'>О нас</a>
					<a href='/'>Наши контакты</a>
					<a href='/'>Агенты</a>
					<a href='/'>Вход</a>
					<a href='/' className='register'>
						Регистрация
					</a>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
