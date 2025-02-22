import Map from '../../components/map/Map';
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';
import './singlePage.scss';

function SinglePage() {
	return (
		<div className='singlePage'>
			<div className='details'>
				<div className='wrapper'>
					<Slider images={singlePostData.images} />
					<div className='info'>
						<div className='top'>
							<div className='post'>
								<h1>{singlePostData.title}</h1>
								<div className='address'>
									<img src='/pin.png' alt='' />
									<span>{singlePostData.address}</span>
								</div>
								<div className='price'>$ {singlePostData.price}</div>
							</div>
							<div className='user'>
								<img src={userData.img} alt='' />
								<span>{userData.name}</span>
							</div>
						</div>
						<div className='bottom'>{singlePostData.description}</div>
					</div>
				</div>
			</div>
			<div className='features'>
				<div className='wrapper'>
					<p className='title'>Условия</p>
					<div className='listVertical'>
						<div className='feature'>
							<img src='/utility.png' alt='' />
							<div className='featureText'>
								<span>Коммунальные услуги</span>
								<p>Входит в стоимость</p>
							</div>
						</div>
						<div className='feature'>
							<img src='/pet.png' alt='' />
							<div className='featureText'>
								<span>Можно с животными</span>
								<p>Да</p>
							</div>
						</div>
						<div className='feature'>
							<img src='/fee.png' alt='' />
							<div className='featureText'>
								<span>Залог</span>
								<p>1 месяц</p>
							</div>
						</div>
					</div>
					<p className='title'>О доме</p>
					<div className='sizes'>
						<div className='size'>
							<img src='/size.png' alt='' />
							<span>80 м²</span>
						</div>
						<div className='size'>
							<img src='/bed.png' alt='' />
							<span>2 спальни</span>
						</div>
						<div className='size'>
							<img src='/bath.png' alt='' />
							<span>1 ванна</span>
						</div>
					</div>
					<p className='title'>Ближайшие места</p>
					<div className='listHorizontal'>
						<div className='feature'>
							<img src='/school.png' alt='' />
							<div className='featureText'>
								<span>Школа</span>
								<p>250м</p>
							</div>
						</div>
						<div className='feature'>
							<img src='/pet.png' alt='' />
							<div className='featureText'>
								<span>Метро</span>
								<p>700м</p>
							</div>
						</div>
						<div className='feature'>
							<img src='/fee.png' alt='' />
							<div className='featureText'>
								<span>Магазин</span>
								<p>200м</p>
							</div>
						</div>
					</div>
					<p className='title'>Расположение</p>
					<div className='mapContainer'>
						<Map items={[singlePostData]} />
					</div>
					<div className='buttons'>
						<button>
							<img src='/chat.png' alt='' />
							Отправить сообщение
						</button>
						<button>
							<img src='/save.png' alt='' />
							Сохранить дом
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SinglePage;
