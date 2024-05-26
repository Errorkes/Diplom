import { useState } from 'react';
import './chat.scss';

function Chat() {
	const [chat, setChat] = useState(true);

	return (
		<div className='chat'>
			<div className='messages'>
				<h1>Сообщения</h1>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
				<div className='message'>
					<img
						src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
					<span>Martin Black</span>
					<p>Lorem ipsum dolor sit, amet ...</p>
				</div>
			</div>
			{chat && (
				<div className='chatBox'>
					<div className='top'>
						<div className='user'>
							<img
								src='https://images.unsplash.com/photo-1560856218-0da41ac7c66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
							/>
							Martin Black
						</div>
						<span className='close' onClick={() => setChat(null)}>
							X
						</span>
					</div>
					<div className='center'>
						<div className='chatMessage'>
							<p>Lorem ipsum dolor sit amet consectetur ...</p>
							<span>1 час назад</span>
						</div>
						<div className='chatMessage own'>
							<p>Lorem ipsum dolor sit amet consectetur ...</p>
							<span>1 час назад</span>
						</div>
						<div className='chatMessage'>
							<p>Lorem ipsum dolor sit amet consectetur ...</p>
							<span>1 час назад</span>
						</div>
						<div className='chatMessage own'>
							<p>Lorem ipsum dolor sit amet consectetur ...</p>
							<span>1 час назад</span>
						</div>
						<div className='chatMessage '>
							<p>Lorem ipsum dolor sit amet consectetur ...</p>
							<span>1 час назад</span>
						</div>
						<div className='chatMessage own'>
							<p>Lorem ipsum dolor sit amet consectetur ...</p>
							<span>1 час назад</span>
						</div>
					</div>
					<div className='bottom'>
						<textarea></textarea>
						<button>Отправить</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Chat;
