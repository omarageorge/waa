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
        <div id={style.intro} className='space-y-10'>
          {/* Navbar */}
          <NavBar />

          {/* Text  content */}
          <div className='container h-auto flex flex-col'>
            <h1 className='text-3xl font-bold text-center md:text-left'>
              Take Off With Confidence
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
