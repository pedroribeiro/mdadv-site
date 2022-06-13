import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { Layout, SEO } from "@components/common";
import axios from "axios";
import { getFormattedDate } from "@utils/helpers";
// import { getPostBySlug, getPostsSlugs } from "@utils/posts";

export default function Post({ post }) {
  return (
    <Layout>
      <SEO
        title={post.title.rendered}
        description={post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/gi, "").replace("[&hellip;]", "...")}
      />

      <article className="m-8">
        <header className="text-center">
          <h1>{post.title.rendered}</h1>
          <br />
          <p className="text-sm text-left">{post.date}</p>
        </header>
        <br />
        <div
          className="flex flex-col space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(`http://medeirosadv.adv.br/wp-json/wp/v2/posts`);

  const paths = res.data.map((post) => ({
    params: { id: String(post.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://medeirosadv.adv.br/wp-json/wp/v2/posts/${params.id}`);

  return { props: { post: { ...res.data, date: getFormattedDate(res.data.date) } } };
}
