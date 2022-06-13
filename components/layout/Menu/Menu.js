/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MenuHeader = () => {
  return (
    <Menu as="div" className={"relative z-10"}>
      <div>
        <Menu.Button>
          <div className="space-y-2 sm:space-y-4">
            <div className="w-8 h-0.5 sm:w-16 sm:h-1 bg-metal-light"></div>
            <div className="w-8 h-0.5 sm:w-16 sm:h-1 bg-metal-light"></div>
            <div className="w-8 h-0.5 sm:w-16 sm:h-1 bg-metal-light"></div>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right right-0  absolute mt-2 w-56 sm:w-96 rounded-md shadow-sm bg-[#f4f4f4] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a href="#quem_somos" className={"block px-4 py-2"}>
                <p>Quem Somos</p>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="#casos_julgados" className={"block px-4 py-2"}>
                <p>Casos Julgados</p>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="#na_midia" className={"block px-4 py-2"}>
                <p>Na mídia</p>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="#consultoria_e_planejamento_previdenciario" className={"block px-4 py-2"}>
                <p>Planejamento Previdenciário</p>
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
