const Badge = ({ text }) => {
  return (
    <span className='rounded-full border border-accent px-2.5 py-0.5 text-sm whitespace-nowrap text-accent font-semibold'>
      {text}
    </span>
  );
};

export default Badge;
