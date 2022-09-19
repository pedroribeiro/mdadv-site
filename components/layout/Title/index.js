export const Title = ({ text, icon = "balanca" }) => {
  const iconType = `${icon}.svg`
  return (
    <div className="flex justify-center">
      <img width={30} src={iconType} alt="justice icon" />
      <h1 className="m-2">{text}</h1>
    </div>
  );
};
