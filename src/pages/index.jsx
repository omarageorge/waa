import Link from 'next/link';
import Typewriter from 'typewriter-effect';

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
            <h1 className=' font-medium text-5xl text-center leading-[3.8rem] text-blue-50 mx-auto md:mx-0 md:text-6xl md:text-left md:max-w-md md:leading-[5rem]'>
              <Typewriter
                options={{
                  strings: [
                    'Westminster Atlantic Airlines',
                    'Fly Off With Confidence',
                  ],
                  autoStart: true,
                  delay: 100,
                  loop: true,
                }}
              />
            </h1>
            {/* <h1 className=' font-medium text-5xl text-center leading-[3.8rem] text-blue-50 mx-auto md:mx-0 md:text-6xl md:text-left md:max-w-md md:leading-[5rem]'>
              Fly Off With Confidence
            </h1> */}

            {/* <h1 className=' font-medium text-5xl text-center text-blue-50 mx-auto md:mx-0 md:text-6xl md:text-left md:max-w-md'>
              Take Off With Confidence
            </h1> */}

            <p className='max-w-sm text-zinc-200 text-center mx-auto md:text-left md:mx-0'>
              Allow us to convey you to your destination in powerful comfort and
              luxury while giving you an astounding flying experience.
            </p>
            {/* <p className='max-w-sm text-zinc-200 text-center mx-auto md:text-left md:mx-0'>
              Allow us to give you an exceptional flying experience by
              providing you with strong comfort and luxury as we transport you
              to your destination.
            </p> */}

            {/* Call to action */}
            <Link href='https://www.turkishairlines.com/en-int/flights/booking'>
              <a
                target='_blank'
                className='block w-32 text-center py-5 mx-auto rounded-full shadow-xl text-white font-medium bg-red-500 hover:bg-red-600 opacity-70 transition-all delay-300 ease-linear md:mx-0 '
              >
                Book Now
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Featured destinations */}
      <section
        id={style.destinations}
        className='w-full h-auto pt-12 bg-gray-100 sm:pt-20'
      >
        <div className='container px-10 mx-auto space-y-12'>
          <h2 className='text-3xl text-center text-gray-900 font-medium xl:text-left'>
            Popular travel destinations
          </h2>

          {/* Popular destinations */}
          <div id={style.popular}>
            {/* Most popular */}
            <div id={style.cols} className='hidden xl:block'>
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
              {/* Most popular smaller card */}
              <div className='xl:hidden'>
                <Card
                  image={places[0].image}
                  destination={places[0].destination}
                  price={places[0].price}
                />
              </div>

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

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path d='M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
        </svg>
      </section>

      {/* Next section */}
      <section className='w-full pb-16  bg-slate-800'>
        {/* Row */}
        <div className='container mx-auto px-10 flex flex-col md:flex-row '>
          {/* Col 1 */}
          <div className='flex-1'>
            <h2 className='text-3xl text-center text-gray-200 font-medium xl:text-left'>
              About us
            </h2>
            <p className='text-gray-300 pt-8'>
              Westminster Atlantic Airlines is an airline alliance that
              collaborates with other airlines. Our mission is to provide people
              with an exceptional flying experience while also training the next
              generation of highly skilled pilots.Captain Allen founded the
              company in 2020, though the concept had been around since 2016.
              The airlines were joined by other airlines near the end of 2021,
              similar to how Kenya Airways, founded in 1977, began working with
              South African Airways 2021.
            </p>

            <p className='text-gray-300 pt-4'>
              Captain Allen is a French Congolese from the Democratic Republic
              of the Congo. His ambition to become a pilot began at the age of
              ten. He grew up near several airports, one of which was
              N&apos;djili Airport, which is located in Kinshasa in the city of
              N&apos;djili. Another airport close to his primary school was
              known as the Airport of Ndolo. Captain Allen and his childhood
              friends used to go to these airports to watch planes take off and
              land, which fueled his desire to become a pilot.
            </p>

            <p className='text-gray-300 pt-4'>
              He spent a significant amount of time in France, where he met many
              Pilots and other people involved in Aviation service, which
              inspired him even more to become a Pilot. He began his aviation
              training in Kinshasa and continued in France and the United
              Kingdom in London. He spent the majority of his flying career in
              Europe and Africa.
            </p>

            <p className='text-gray-300 pt-4'></p>
          </div>

          {/* Col 2 */}
          <div className='flex-1'></div>
        </div>
      </section>
    </>
  );
}
