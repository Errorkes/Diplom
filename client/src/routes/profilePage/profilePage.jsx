import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import './profilePage.scss';

function ProfilePage() {
	const { updateUser, currentUser } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await apiRequest.post('/auth/logout');
			updateUser(null);
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='profilePage'>
			<div className='details'>
				<div className='wrapper'>
					<div className='title'>
						<h1>Информация о пользователе</h1>
						<Link to='/profile/update'>
							<button>Обновить профиль</button>
						</Link>
					</div>
					<div className='info'>
						<span>
							Фото:
							<img src={currentUser.avatar || '/noavatar.jpg'} alt='' />
						</span>
						<span>
							Имя: <b>{currentUser.username}</b>
						</span>
						<span>
							E-mail: <b>{currentUser.email}</b>
						</span>
						<button onClick={handleLogout}>Выйти</button>
					</div>
					<div className='title'>
						<h1>Мои объявления</h1>
						<button>Создать объявление</button>
					</div>
					<List />
					<div className='title'>
						<h1>Избранные дома</h1>
					</div>
					<List />
				</div>
			</div>
			<div className='chatContainer'>
				<div className='wrapper'>
					<Chat />
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
