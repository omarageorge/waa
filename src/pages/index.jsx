import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import { Card, BigCard } from '../components/Card';

import style from '../styles/index.module.scss';

export default function Home() {
  const places = [
    { image: '/images/usa.jpg', destination: 'USA', price: '$1000 - $1300' },

    {
      image: '/images/germany.jpg',
      destination: 'Germany',
      price: '$800 - $1100',
    },

    {
      image: '/images/sweden.jpg',
      destination: 'Sweden',
      price: '$600 - $900',
    },

    {
      image: '/images/uk.jpg',
      destination: 'United Kingdom',
      price: '$1000 - $1100',
    },

    {
      image: '/images/south-africa.jpg',
      destination: 'South Africa',
      price: '$300 - $800',
    },
  ];

  return (
    <>
      <Meta title='Westminster Atlantic Airlines' />
      {/* Header */}
      <header id={style.header}>
        {/* Background video */}
        <video id={style.video} autoPlay muted loop>
          <source src='/videos/sky.webm' type='video/webm' />
        </video>

        {/* Background overlay */}
        <div id={style.overlay}></div>

        {/* Intro */}
        <div id={style.intro} className='space-y-20'>
          {/* Navbar */}
          <NavBar />

          {/* Text  content */}
          <div className='container h-auto flex flex-col space-y-10 px-10 mx-auto'>
            <h1 className='max-w-md font-medium text-5xl text-center text-blue-50 md:text-6xl sm:text-left'>
              Take Off With Confidence
            </h1>

            <p className='max-w-sm text-zinc-200 text-center sm:text-left'>
              Let us to give you with an exceptional flying experience by
              providing you with strong comfort and luxury as we transport you
              to your destination.
            </p>
          </div>
        </div>
      </header>

      {/* Featured destinations */}
      <main className='w-full h-auto py-12 bg-gray-100 sm:py-20'>
        <div className='container px-10 mx-auto space-y-12'>
          <h2 className='text-3xl text-center text-gray-900 font-medium sm:text-left'>
            Popular travel destinations
          </h2>

          {/* Popular destinations */}
          <div id={style.popular}>
            {/* Most popular */}
            <div id={style.cols} className='hidden lg:block'>
              <BigCard
                image={places[0].image}
                destination={places[0].destination}
                price={places[0].price}
              />
            </div>

            {/* Others */}
            <div
              id={style.cols}
              className='w-full grid grid-cols-1 gap-y-10 justify-items-center sm:grid-cols-2'
            >
              {places.map((place, index) => {
                if (index !== 0) {
                  return (
                    <Card
                      key={index}
                      image={place.image}
                      destination={place.destination}
                      price={place.price}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
