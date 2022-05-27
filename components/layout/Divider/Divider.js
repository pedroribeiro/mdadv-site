import cslx from "clsx";

export const Divider = ({ dark }) => {
  return (
    <div
      className={cslx("h-2", {
        "bg-metal-dark": dark,
        "bg-metal-light": !dark,
      })}
    ></div>
  );
};
