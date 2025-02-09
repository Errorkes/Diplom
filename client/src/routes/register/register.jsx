import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import './register.scss';

function Register() {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		setIsLoading(true);
		const formData = new FormData(e.target);

		const username = formData.get('username');
		const email = formData.get('email');
		const password = formData.get('password');

		try {
			const res = await apiRequest.post('/auth/register', {
				username,
				email,
				password,
			});

			navigate('/login');
		} catch (err) {
			setError(err.response.data.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className='register'>
			<div className='formContainer'>
				<form onSubmit={handleSubmit}>
					<h1>Регистрация</h1>
					<input name='username' type='text' placeholder='Имя пользователя' />
					<input name='email' type='text' placeholder='Email' />
					<input name='password' type='password' placeholder='Пароль' />
					<button disabled={isLoading}>Зарегистрироваться</button>
					{error && <span>{error}</span>}
					<Link to='/login'>Уже зарегистрированы?</Link>
				</form>
			</div>
			<div className='imgContainer'>
				<img src='/bg.png' alt='' />
			</div>
		</div>
	);
}

export default Register;
