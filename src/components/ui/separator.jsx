const Separator = ({ title }) => {
  return (
    <span className='flex items-center md:max-w-2xl md:mx-auto mb-10'>
      <span className='h-px flex-1 bg-accent'></span>
      <span className='px-4 text-text flex-1 md:flex-none font-monofett font-bold text-4xl md:text-4xl md:tracking-wider text-center'>
        {" "}
        {title}{" "}
      </span>
      <span className='h-px flex-1 bg-accent'></span>
    </span>
  );
};

export default Separator;
