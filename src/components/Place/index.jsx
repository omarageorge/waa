import Image from 'next/image';
import style from './place.module.scss';

function Place({ image, name }) {
  return (
    <div
      id={style.wrapper}
      className='bg-gray-100'
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div id={style.content}></div>

      {/* Content */}
      <div id={style.text}>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Place;
