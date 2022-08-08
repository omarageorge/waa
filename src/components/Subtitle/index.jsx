import Slide from 'react-reveal/Slide';

export default function Subtitle({ color, children }) {
  return (
    <Slide bottom>
      <h2 className={`text-3xl text-center ${color} font-medium xl:text-left`}>
        {children}
      </h2>
    </Slide>
  );
}
