import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import style from '../styles/header.module.scss';

export default function Home() {
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
          <div className='container h-auto flex flex-col space-y-6 px-10 mx-auto'>
            <h1 className='max-w-md font-medium text-5xl text-center text-blue-50 md:text-6xl sm:text-left'>
              Take Off With Confidence
            </h1>

            <p className='max-w-sm text-zinc-300 text-center sm:text-left'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              deleniti harum similique nam iure rem eligendi accusantium dolore
              ipsum.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
