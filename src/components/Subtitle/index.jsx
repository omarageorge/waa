import Slide from 'react-reveal/Slide';

export default function Subtitle({ color, center, children }) {
  return (
    <Slide bottom>
      <h2
        className={`text-3xl text-center ${color} font-medium ${
          center ? 'xl:text-center' : 'xl:text-left'
        }`}
      >
        {children}
      </h2>
    </Slide>
  );
}
