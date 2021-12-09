import Head from "next/head";
import { Container } from "@styles/layout";
import SEO from "@components/seo";
import defaultSEO from "@components/seo/default";
import Home from "../routes/home";

export async function getStaticProps() {
  const res = await fetch("https://www.opensooq.com/api/v2.1/countries", {
    headers: {
      source: "mobile",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJfNmFjMzBiNDAtZTczNy00YjU3LWIzZWYtYThkMDY5MmI1YjVmIiwiYXVkIjoibW9iaWxlIiwicm5kIjoiMjIyNTI1MTgiLCJhdDAiOjE2MzkwMzM3NTcsImV4cCI6MTYzOTAzNDMxMH0.hfbcI0GdFcIulINllQ465152OkCU_fOuwPxD2d0wKo8",
      country: "jo",
    },
  });

  const data = await res?.json();

  return {
    props: {
      categories: data?.items,
    },
  };
}

export default function HomePage({ categories }) {
  return (
    <>
      <Head>
        <title>{defaultSEO?.page_title_en}</title>
        <SEO seo={defaultSEO} />
      </Head>
      <Container>
        <Home categories={categories} />
      </Container>
    </>
  );
}
