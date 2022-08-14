import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import style from '../styles/gallery.module.scss';

const gallery = () => {
  return (
    <>
      {/* Meta descriptions */}
      <Meta />

      {/* Navbar */}
      <NavBar dark />

      {/* Banner section */}
      <section id={style.banner}>
        <div className={style.overlay}></div>
        <div className={style.content}>
          <h1>Gallery</h1>
        </div>
      </section>
    </>
  );
};

export default gallery;
