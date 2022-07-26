import clsx from "clsx";

export const WhatsApp = ({ showText, small }) => {
  return (
    <div>
      <a
        className="text-black hover:text-blue-800 "
        href="https://api.whatsapp.com/send?phone=+5521992552687&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços"
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
