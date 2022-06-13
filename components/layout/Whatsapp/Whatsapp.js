import clsx from "clsx";

export const WhatsApp = ({ showText, small }) => {
  return (
    <div>
      <a
        className="text-black hover:text-blue-800 "
        href="https://api.whatsapp.com/send?phone=+5521969759720&text=I'm%20interested%20in%20your%20services"
        target="_blank"
      >
        <button className="">
          <div
            className={clsx("w-8 h-8 sm:w-16 sm:h-16", {
              "w-32": small,
            })}
          >
            <img className={"object-contain w-full h-full ml-4 sm:ml-4 md:ml-2"} src="/logo_wpp.svg" />
          </div>
          {showText && <p className={"text-sm font-light sm:text-lg"}>WhatsApp</p>}
        </button>
      </a>
    </div>
  );
};
