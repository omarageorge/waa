import Fade from 'react-reveal/Fade';

const Paragraph = ({ children }) => (
  <Fade bottom>
    <p className='text-gray-300  pt-8'>{children}</p>
  </Fade>
);

export default Paragraph;
