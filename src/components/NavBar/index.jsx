import { useRef } from 'react';
import Link from 'next/link';
import style from './styles.module.scss';

const index = () => {
  return (
    <nav className={style.navbar}>
      {/* Logo */}
      <Link href='/'>
        <span className={style.logo}>WAA</span>
      </Link>

      {/* navlinks */}
      <div className={style.navlinks}>
        <Link href=''>
          <a>Home</a>
        </Link>

        <Link href=''>
          <a>About</a>
        </Link>

        <Link href=''>
          <a>Gallery</a>
        </Link>

        <Link href=''>
          <a>Policy</a>
        </Link>

        <Link href=''>
          <a>Contact</a>
        </Link>
      </div>

      {/* Burger menu */}
      <div className={style.burger}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </nav>
  );
};

export default index;
