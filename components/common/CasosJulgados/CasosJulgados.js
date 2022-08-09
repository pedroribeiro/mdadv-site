import { useState } from "react";
import { Divider } from "@components/layout";
import Link from "next/link";
import { Button } from "@components/layout";
import clsx from "clsx";

export const CasosJulgados = ({ posts }) => {
  const [hidden, setHidden] = useState(3);

  const handleClick = () => {
    if (hidden >= posts.length) {
      setHidden(3);
    } else {
      setHidden((hidden) => hidden + 3);
    }
  };

  return (
    <>
      <section id="casos_julgados" className="bg-[#E5E5E5] text-black text-center">

        <br />
        <h1>Casos Julgados</h1>
        <br />

        <div className="flex">
          <InSlide2 />
          <InSlide1 />
        </div>

        <div className="p-5">
          <br />
          <br />

          {posts.map((post, index) => {
            const show = index < hidden;

            return (
              <div key={index} className={clsx("block", { hidden: !show })}>
                <article key={post.slug}>
                  <header className="mb-2">
                    <h3 className="mb-2">
                      <Link href={"/posts/[id]"} as={`/posts/${post.id}`}>
                        <a target="_blank" className="font-bold italic text-xl sm:text-3xl">
                          {post.title.rendered}
                        </a>
                      </Link>
                    </h3>
                  </header>
                </article>
                <br />
              </div>
            );
          })}

          <br />
          <Button
            text={hidden <= posts.length ? "Veja mais" : "Veja menos"}
            size={8}
            handleClick={handleClick}
          />
        </div>
      </section>
    </>
  );
};

const InSlide1 = () => {
  return (
    <SlideContainer>
      <div className="text-white text-center text-sm font-light sm:text-lg p-5">
        <p className="font-bold">Confira abaixo as mais recentes decisões obtidas por nosso escritório</p>
      </div>
    </SlideContainer>
  );
};

const InSlide2 = () => {
  return (
    <SlideContainer>
      <img className={"object-cover w-full h-full"} src="/casosJulgados.jpg" />
    </SlideContainer>
  );
};

const SlideContainer = ({ children }) => {
  return (
    <div className="bg-metal flex items-center justify-center bg-metal h-40 sm:h-80 w-full">{children}</div>
  );
};
