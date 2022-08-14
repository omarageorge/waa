import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import style from './styles.module.scss';

function NavBar() {
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
      className={`${style.navbar} ${active === true && 'bg-white shadow-2xl'}`}
    >
      {/* Logo */}
      <Link href='/'>
        <span
          className={`${style.logo} ${
            active === true
              ? 'text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600'
              : 'text-gray-100'
          }`}
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
              }`}
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
              : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`line2 ${
            active === true ? 'bg-gray-500 opacity-0' : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`line3 ${
            active === true
              ? 'bg-gray-500 rotate-45 translate-x-[-5px] translate-y-[-6px]'
              : 'bg-gray-200'
          }`}
        ></div>
      </div>
    </nav>
  );
}

export default NavBar;
