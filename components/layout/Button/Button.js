import cslx from "clsx";

export const Button = ({ text, ligth, size, handleClick, disabled = false }) => {
  return (
    <button
      onClick={handleClick}
      className={cslx(`text-white font-bold py-1 px-2 rounded-md`, {
        "bg-metal-dark": !ligth,
        "bg-metal-light": ligth,
        "cursor-default": disabled,
        "px-4": size === 4,
        "px-8": size === 8,
        "px-16": size === 16,
      })}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
