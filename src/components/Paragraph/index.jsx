import Fade from 'react-reveal/Fade';

export const Paragraph = ({ children }) => (
  <Fade>
    <p className='text-gray-300  pt-8'>{children}</p>
  </Fade>
);

export const PureParagraph = ({ children, style }) => (
  <Fade>
    <p className={`${style}`}>{children}</p>
  </Fade>
);
