import Link from 'next/link';

const index = () => {
  return (
    <nav className='container px-10 mx-auto flex justify-between items-center pt-6'>
      {/* Logo */}
      <Link href='/'>
        <span className='font-semibold text-2xl tracking-widest text-slate-100 cursor-pointer'>
          WAA
        </span>
      </Link>

      {/* Links */}
      <div className='hidden text-slate-300 uppercase text-xs tracking-wider space-x-12 md:block'>
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

      {/* Burger */}
      <div className='space-y-1 cursor-pointer md:hidden'>
        <div className='w-7 h-1 bg-slate-300 rounded-2xl'></div>
        <div className='w-7 h-1 bg-slate-300 rounded-2xl'></div>
        <div className='w-7 h-1 bg-slate-300 rounded-2xl'></div>
      </div>
    </nav>
  );
};

export default index;
