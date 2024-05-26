import { Placemark } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom';
import './pin.scss';

function Pin({ item }) {
	return (
		<Placemark defaultGeometry={[item.latitude, item.longitude]}>
			<div className='baloonContainer'>
				<img src={item.img} alt='' />
				<div className='textContainer'>
					<Link to={`/${item.id}`}>{item.title}</Link>
					<span className='bed'>{item.bedroom}</span>
					<b>{item.price}</b>
				</div>
			</div>
		</Placemark>
	);
}

export default Pin;
