import {
  Layout,
  SEO,
  Carrousel,
  QuemSomos,
  CasosJulgados,
  NaMidia,
  Consultoria,
  Insalubridade,
  Revisao
} from "@components/common";

import axios from "axios";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Medeiros Advogados" />
      <Carrousel />
      <QuemSomos />
      <CasosJulgados posts={posts} />
      <NaMidia />
      <Insalubridade />
      <Revisao />
      <Consultoria />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`http://medeirosadv.adv.br/wp-json/wp/v2/posts`);

  return {
    props: {
      posts: res.data,
    },
  };
}
