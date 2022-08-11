export const Row = ({ style, children }) => {
  return <div className={`flex flex-col ${style} md:flex-row`}>{children}</div>;
};

export const Column = ({ style, children }) => {
  return <div className={`flex-1 ${style}`}>{children}</div>;
};
