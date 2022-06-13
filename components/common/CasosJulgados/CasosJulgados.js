import { useState } from "react";
import { Divider } from "@components/layout";
import Link from "next/link";
// import { Button } from "@components/layout";
// import clsx from "clsx";

export const CasosJulgados = ({ posts }) => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <Divider />
      <div id="casos_julgados" className="p-5">
        <div className="text-black text-center">
          <h1>Casos Julgados</h1>
          <br />

          <div className="italic">
            <p className="font-bold">
              Confira abaixo as mais recentes decisões obtidas por nosso escritório:
            </p>

            <br />
            {posts.map((post, index) => {
              return (
                <>
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
                    <section>
                      <div
                        className="mb-8 text-sm"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      ></div>
                    </section>
                  </article>
                  {/* <br />

                <p>{post.title.rendered}</p>
                <br /> */}
                </>
              );
            })}
          </div>

          <br />
          {/* <Button text={hidden ? "Veja mais" : "Veja menos"} size={8} handleClick={handleClick} /> */}
        </div>
      </div>
      <Divider />
    </>
  );
};
// http://medeirosadv.adv.br/wp-json/wp/v2/posts
// http://medeirosadv.adv.br/wp-json/wp/v2/posts/{id}
