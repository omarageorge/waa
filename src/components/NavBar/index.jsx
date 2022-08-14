import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import style from './styles.module.scss';

function NavBar({ dark }) {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const hyperlinks = [
    { title: 'Home', link: '/' },
    { title: 'Popular', link: '/#popular' },
    { title: 'About', link: '/#about' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Policy', link: '/#policy' },
    { title: 'Contact', link: '/#contact' },
  ];

  const handleBurgerClick = () => {
    setActive(!active);
  };

  return (
    <nav
      className={`${style.navbar} ${active === true && 'bg-white shadow-2xl'} ${
        dark ? 'md:shadow-sm' : 'md:shadow-none'
      } `}
    >
      {/* Logo */}
      <Link href='/'>
        <span
          className={`${style.logo} ${
            active
              ? 'text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600'
              : dark
              ? 'text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600'
              : 'text-gray-100'
          }  ${
            dark
              ? 'md:text-transparent md:bg-clip-text md:bg-gradient-to-tr md:from-purple-400 md:to-pink-600'
              : 'md:text-gray-100'
          } `}
        >
          WAA
        </span>
      </Link>

      {/* navlinks */}
      <div
        className={`${style.navlinks} ${
          active === false && 'translate-x-[-100%] md:translate-x-[0%]'
        }`}
      >
        {hyperlinks.map((hyperlink, index) => (
          <Link key={index} href={hyperlink.link}>
            <a
              onClick={() => setActive(false)}
              className={`${
                router.pathname === hyperlink.link && 'bg-gray-200'
              } ${dark ? 'md:text-gray-800' : 'md:text-gray-200'}`}
            >
              {hyperlink.title}
            </a>
          </Link>
        ))}
      </div>

      {/* Burger menu */}
      <div className={style.burger} onClick={handleBurgerClick}>
        <div
          className={`line1 ${
            active === true
              ? 'bg-gray-500 -rotate-45 translate-x-[-5px] translate-y-[6px]'
              : dark
              ? 'bg-gray-500 '
              : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`line2 ${
            active === true
              ? 'bg-gray-500 opacity-0'
              : dark
              ? 'bg-gray-500 '
              : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`line3 ${
            active === true
              ? 'bg-gray-500 rotate-45 translate-x-[-5px] translate-y-[-6px]'
              : dark
              ? 'bg-gray-500 '
              : 'bg-gray-200'
          }`}
        ></div>
      </div>
    </nav>
  );
}

export default NavBar;
