import Footer from '../components/Footer';
import Meta from '../components/Meta';
import NavBar from '../components/NavBar';
import Place from '../components/Place';

function gallery() {
  const places = [
    { image: '/images/usa.jpg', name: 'USA' },

    {
      image: '/images/germany.jpg',
      name: 'Germany',
    },

    {
      image: '/images/sweden.jpg',
      name: 'Sweden',
    },

    {
      image: '/images/uk.jpg',
      name: 'United Kingdom',
    },

    {
      image: '/images/south-africa.jpg',
      name: 'South Africa',
    },
  ];

  return (
    <>
      {/* Meta descriptions */}
      <Meta />

      {/* Navbar */}
      <NavBar dark />

      {/* Page Title */}
      <h1 className='text-gray-700 text-2xl text-center py-6 pl-10 md:text-left'>
        Places we&apos;ve been to!
      </h1>

      {/* Pictures of places */}
      <section className='container mx-auto h-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 justify-items-center pb-10'>
        {/* Place */}
        {places.map((place) => (
          <Place key={place.name} image={place.image} name={place.name} />
        ))}
      </section>

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default gallery;

// flex justify-evenly flex-wrap gap-y-10
