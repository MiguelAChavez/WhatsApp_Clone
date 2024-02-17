export const LoginInput = ({ type, ariaLabel, id, name, children }) => {
  return (
    <div
      className="focus-within:outline outline-1 outline-primary-green 
      pl-6 pr-[10px] py-[14.5px] relative min-w-[260px] rounded-3xl border-2 
      flex flex-row items-center cursor-text border-primary-strong-dark 
      dark:border-gray-800"
    >
      {children}
      <input
        className="border-none outline-none bg-transparent h-5 "
        aria-label={ariaLabel}
        type={type}
        name={name}
        id={id}
        autoComplete="off"
      />
    </div>
  );
};
