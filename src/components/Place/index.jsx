import Image from 'next/image';
import style from './place.module.scss';

function Place({ image, name }) {
  return (
    <div id={style.wrapper} className='bg-gray-100'>
      {/* Background Image */}
      <div className={style.image}>
        <Image
          src={image}
          width='100%'
          height='100%'
          layout='fill'
          objectFit='cover'
          loading='lazy'
          alt={name}
        />
      </div>

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
