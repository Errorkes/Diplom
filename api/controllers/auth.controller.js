import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		// хэш пароля
		const hashedPassword = await bcrypt.hash(password, 10);

		console.log(hashedPassword);

		// создание польз и сохранение в бд
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});
		console.log(newUser);

		res.status(201).json({ message: 'Пользователь успешно создан' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Ошибка создания пользователя!' });
	}
};

export const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		// проверка на существование польз
		const user = await prisma.user.findUnique({
			where: { username },
		});

		if (!user)
			return res
				.status(400)
				.json({ message: 'Такого пользователя не существует' });

		// Проверка пароля
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid)
			return res.status(400).json({ message: 'Неверно введены данные!' });
		// Создание куки и отправка пользователю
		// res.setHeader('Set-Cookie', 'test=' + 'myValue').json('success');
		const age = 1000 * 60 * 60 * 24 * 7;

		const token = jwt.sign(
			{
				id: user.id,
				isAdmin: false,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: age }
		);

		const { password: userPassword, ...userInfo } = user;

		res
			.cookie('token', token, {
				httpOnly: true,
				maxAge: age,
			})
			.status(200)
			.json(userInfo);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Ошибка входа' });
	}
};

export const logout = async (req, res) => {
	res.clearCookie('token').status(200).json({ message: 'Выход успешный' });
};
