function Button({ onClickHandler, id, key, children }) {
  return (
    <button
      onClick={onClickHandler}
      className="bg-zinc-700 p-2 mx-1 content-center w-fit text-nowrap whitespace-nowrap text-center focus:outline-none active:underline focus:underline active:outline-none focus:text-yellow-400"
      id={id}
      key={key}
    >
      {children}
    </button>
  );
}

export default Button;
