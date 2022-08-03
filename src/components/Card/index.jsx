import Image from 'next/image';

export const Card = ({ image, destination, price }) => {
  return (
    <figure className='w-60 h-auto rounded-3xl shadow-lg shadow-gray-200 bg-gray-50 md:w-80 xl:w-60 '>
      <div className='w-full h-32 relative md:h-44 xl:h-32'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          alt=''
          className='rounded-t-2xl'
        />
      </div>
      <figcaption className=' flex flex-col p-4 space-y-2'>
        <span className='font-medium text-blue-900'>{destination}</span>
        <span className='text-sm font-light text-gray-900'>{price}</span>
      </figcaption>
    </figure>
  );
};

export const BigCard = ({ image, destination, price }) => {
  return (
    <figure className='w-full h-full rounded-3xl shadow-lg bg-gray-50 '>
      <div className='w-full h-[80%] relative'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          alt=''
          className='rounded-t-2xl'
        />
      </div>
      <figcaption className=' flex flex-col p-4 space-y-2'>
        <span className='font-medium text-blue-900'>{destination}</span>
        <span className='text-sm font-light text-gray-900'>{price}</span>
      </figcaption>
    </figure>
  );
};
