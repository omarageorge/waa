import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import PulseLoader from 'react-spinners/PulseLoader';

import { Card, BigCard } from '../components/Card';
import { Row, Column } from '../components/Flex';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import { Paragraph, PureParagraph } from '../components/Paragraph';
import Subtitle from '../components/Subtitle';
import Footer from '../components/Footer';

import aboutImage from '../assets/about.jpg';
import style from '../styles/index.module.scss';

import cheapoiair from '../assets/partners/cheapoiair.png';
import turkish from '../assets/partners/turkish.png';

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

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post('/api/message', message);
      setLoading(false);
      setMessage({ ...message, name: '', email: '', message: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

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
            <h1 className='font-medium text-5xl text-center leading-[3.8rem] text-blue-50 mx-auto md:mx-0 md:text-6xl md:text-left md:max-w-md md:leading-[5rem]'>
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

            <Slide bottom>
              <p className='max-w-sm text-zinc-200 text-center mx-auto md:text-left md:mx-0'>
                Allow us to convey you to your destination in powerful comfort
                and luxury while giving you an astounding flying experience.
              </p>
            </Slide>

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

      {/* Popular destinations */}
      <main id='popular'>
        <section
          id={`${style.destinations}`}
          className='w-full h-auto pt-12 bg-gray-100 sm:pt-20'
        >
          <Container style='space-y-12'>
            <Subtitle color='text-gray-900'>
              Popular travel destinations
            </Subtitle>

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
          </Container>

          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path d='M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
          </svg>
        </section>
      </main>

      {/* About section */}
      <section id='about' className='w-full  pt-10  bg-slate-800 md:pt-0'>
        <Container>
          {/* Row */}
          <Row>
            {/* Col 1 */}
            <Column>
              <Subtitle color='text-gray-200'>About us</Subtitle>

              <Paragraph>
                Westminster Atlantic Airlines is an airline alliance that
                collaborates with other airlines. Our mission is to provide
                people with an exceptional flying experience while also training
                the next generation of highly skilled pilots.Captain Allen
                founded the company in 2020, though the concept had been around
                since 2016. The airlines were joined by other airlines near the
                end of 2021, similar to how Kenya Airways, founded in 1977,
                began working with South African Airways 2021.
              </Paragraph>

              <div className='pt-8 md:hidden text-gray-700 '>
                <Fade>
                  <Image
                    src={aboutImage}
                    placeholder='blur'
                    alt='Captain Allen'
                    style={{ borderRadius: '10px' }}
                  />
                </Fade>
              </div>

              <Paragraph>
                Captain Allen is a French Congolese from the Democratic Republic
                of the Congo. His ambition to become a pilot began at the age of
                ten. He grew up near several airports, one of which was
                N&apos;djili Airport, which is located in Kinshasa in the city
                of N&apos;djili. Another airport close to his primary school was
                known as the Airport of Ndolo. Captain Allen and his childhood
                friends used to go to these airports to watch planes take off
                and land, which fueled his desire to become a pilot.
              </Paragraph>

              <Paragraph>
                He spent a significant amount of time in France, where he met
                many Pilots and other people involved in Aviation service, which
                inspired him even more to become a Pilot. He began his aviation
                training in Kinshasa and continued in France and the United
                Kingdom in London. He spent the majority of his flying career in
                Europe and Africa.
              </Paragraph>

              <p className='text-gray-300 pt-4'></p>
            </Column>

            {/* Col 2 */}
            <Column style='hidden items-center justify-center pt-12 md:flex'>
              <Fade>
                <div className='w-[90%]'>
                  <Image
                    src={aboutImage}
                    placeholder='blur'
                    alt='Captain Allen'
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </Fade>
            </Column>
          </Row>

          {/* Partners */}
          <div className='w-full h-auto bg-gray-800 mt-20'>
            <Subtitle color='text-gray-200' center>
              Our Partners
            </Subtitle>

            <p className='font-light text-md text-gray-300 text-center mt-4'>
              You may book flights through our partners
            </p>

            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:md:grid-cols-3'>
              <Link href='https://www.cheapoair.com/flights/booknow/airlines'>
                <a
                  target='_blank'
                  className='flex  items-center justify-center w-full h-44 bg-white m-auto rounded-md overflow-hidden'
                >
                  <Image src={cheapoiair} width='250px' height='100px' alt='' />
                </a>
              </Link>

              <Link href='#'>
                <a
                  target='_blank'
                  className='flex  items-center justify-center w-full h-44 bg-white m-auto rounded-md overflow-hidden'
                >
                  <Image src={turkish} width='260px' height='70px' alt='' />
                </a>
              </Link>

              <Link href='#'>
                <a
                  target='_blank'
                  className='flex  items-center justify-center w-full h-44 bg-white m-auto rounded-md overflow-hidden'
                >
                  <Image src={turkish} width='260px' height='70px' alt='' />
                </a>
              </Link>
            </div>
          </div>
        </Container>
        <svg
          className='block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            className='fill-slate-900 opacity-100'
            d='M0,192L1440,256L1440,320L0,320Z'
          ></path>
        </svg>
      </section>

      {/* Policy */}

      <section id='policy' className='bg-slate-900 pb-20'>
        <Container>
          {/* Row */}
          <Row>
            {/* Column 1 */}
            <Column style='pt-12 md:pt-0'>
              <Subtitle color='text-gray-200'>Send us a message</Subtitle>

              <form onSubmit={handleFormSubmission} id={style.message}>
                <div id='contact'>
                  <input
                    type='text'
                    name='name'
                    value={message.name}
                    onChange={handleInputChange}
                    placeholder='Name'
                  />
                </div>

                <div>
                  <input
                    type='email'
                    name='email'
                    value={message.email}
                    onChange={handleInputChange}
                    placeholder='Email'
                  />
                </div>

                <div>
                  <textarea
                    name='message'
                    value={message.message}
                    onChange={handleInputChange}
                    placeholder='Message'
                  ></textarea>
                </div>

                <div>
                  <button type='submit' disabled={loading ? true : false}>
                    {loading ? <PulseLoader color='white' size={8} /> : 'Send'}
                  </button>
                </div>
              </form>
            </Column>

            {/* Column 2 */}
            <Column>
              <Subtitle color='text-gray-200'>Our policy</Subtitle>

              <PureParagraph style='text-gray-400 leading-[1.6rem] pt-6'>
                If you have a medical condition, please let us know when you
                make your flight reservation. To be safe, we recommend paying an
                additional fee on top of the ticket price to protect yourself if
                you miss a flight. The additional fee will guarantee either a
                refund of the ticket price or the ability to reschedule the
                flight if you miss it. Incase you wish to cancel your flight, we
                recommend doing so at least 24 hours or latest 8 hours before
                your flight departure.
              </PureParagraph>
            </Column>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
