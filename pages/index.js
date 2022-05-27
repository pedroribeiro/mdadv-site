import Link from "next/link";

import { Layout, SEO, Carrousel, QuemSomos, CasosJulgados, NaMidia, Consultoria } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Medeiros Advogados" />
      <Carrousel />
      <QuemSomos />
      <CasosJulgados />
      <NaMidia />
      <Consultoria />
      {/* {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/posts/[slug]"} as={`/posts/${slug}`}>
                <a className="text-4xl font-bold text-yellow-600 font-display">{title}</a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))} */}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
