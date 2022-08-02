import { useState } from 'react';
import Link from 'next/link';
import style from './styles.module.scss';

function NavBar() {
  const [active, setActive] = useState(false);

  const handleBurgerClick = () => {
    setActive(!active);
  };

  return (
    <nav className={style.navbar}>
      {/* Logo */}
      <Link href='/'>
        <span className={style.logo}>WAA</span>
      </Link>

      {/* navlinks */}
      <div
        className={`${style.navlinks} ${
          active === true ? 'translate-x-[0%]' : 'translate-x-[-100%]'
        }`}
      >
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
      <div className={style.burger} onClick={handleBurgerClick}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default NavBar;
