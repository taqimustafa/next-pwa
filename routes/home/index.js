import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { ListContainer, ListItem, ItemContainer } from "./index.styled";

export default function Home({ categories }) {
  console.info(categories);
  return (
    <>
      <main>
        <Header title="Opensooq" />
        {categories?.length > 0 && (
          <ListContainer>
            {categories.map((category) => (
              <ListItem key={category?.id}>
                <Link href={`/${category?.url_name_en}`}>
                  <ItemContainer>
                    <img
                      width="40px"
                      height="40px"
                      alt={category?.pag_image_url}
                      src={category?.icon}
                    />
                    <b>{category?.name_english}</b>
                  </ItemContainer>
                </Link>
              </ListItem>
            ))}
          </ListContainer>
        )}
      </main>
      <Footer />
    </>
  );
}
