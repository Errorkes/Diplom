import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import './login.scss';

function Login() {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { updateUser } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		setError('');
		const formData = new FormData(e.target);

		const username = formData.get('username');
		const password = formData.get('password');

		try {
			const res = await apiRequest.post('/auth/login', {
				username,
				password,
			});

			updateUser(res.data);

			navigate('/');
		} catch (err) {
			setError(err.response.data.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className='login'>
			<div className='formContainer'>
				<form onSubmit={handleSubmit}>
					<h1>Добро пожаловать</h1>
					<input
						name='username'
						required
						minLength={3}
						maxLength={30}
						type='text'
						placeholder='Имя пользователя'
					/>
					<input
						name='password'
						required
						type='password'
						placeholder='Пароль'
					/>
					<button disabled={isLoading}>Войти</button>
					{error && <span>{error}</span>}
					<Link to='/register'>Нет аккаунта?</Link>
				</form>
			</div>
			<div className='imgContainer'>
				<img src='/bg.png' alt='' />
			</div>
		</div>
	);
}

export default Login;
