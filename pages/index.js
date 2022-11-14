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

const API_URL = process.env.REACT_APP_API_URL

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
  try {
    const res = await axios.get(`${API_URL}/wp-json/wp/v2/posts`);
    return {
      props: {
        posts: res.data,
      },
    };
  } catch (e) {

    return {
      props: {
        posts: [],
      }
    }
  }
}
