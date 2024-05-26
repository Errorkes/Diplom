import { Map, YMaps } from '@pbe/react-yandex-maps';
import Pin from '../pin/Pin';
import './map.scss';

function Ymap({ items }) {
	return (
		<YMaps>
			<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className='map'>
				{items.map(item => (
					<Pin item={item} key={item.id} />
				))}
			</Map>
		</YMaps>
	);
}

export default Ymap;
