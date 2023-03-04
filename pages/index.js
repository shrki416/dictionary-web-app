import { dark, light } from "../lib/Theme";

import Definition from "../components/Definition";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";
import Header from "../components/Header";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import Search from "../components/Search";
import { ThemeProvider } from "styled-components";
import Word from "../components/Word";
import WordContext from "../context/WordContext";
import styled from "styled-components";
import { useContext } from "react";
import { useDarkMode } from "../lib/useDarkMode";

export default function Home() {
  const [theme, toggleTheme] = useDarkMode();

  const { words } = useContext(WordContext);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <MaxWidthWrapper>
        <Head>
          <title>Dictionary web app</title>
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Dictionary Web App" />
          <link rel="icon" href="/images/favicon.ico" />
          <meta property="og:url" content="" />
          <link
            rel="canonical"
            href="https://aa-dictionary-web-app.vercel.app/"
          />
          <meta property="og:title" content="Dictionary web app" />
          <meta
            property="og:description"
            content="An app that utilizes the Dictionary API to search words"
          />
          <meta property="og:image" content="../public/images/preview.jpg" />
          <meta property="og:type" content="website" />
          <meta
            property="og:publish_date"
            content={new Date()}
            name="publish_date"
          />
          <meta name="author" content="Ahmed Abdelaal" />
        </Head>

        <Header theme={theme} toggleTheme={toggleTheme} />

        <Search />
        {!words.title ? (
          <main>
            <Word />
            <Definition />
            <Footer />
          </main>
        ) : (
          <Error>
            <Emoji>😕</Emoji>
            <h2>{words.title}</h2>
            <p>
              {words.message}. {words.resolution}
            </p>
          </Error>
        )}
      </MaxWidthWrapper>
    </ThemeProvider>
  );
}

const Error = styled.div`
  display: grid;
  place-items: center;
  margin-top: 8.25rem;

  h2,
  p {
    color: ${({ theme }) => theme.body};
  }

  p {
    text-align: center;
    margin-top: 1.5rem;
  }
`;

const Emoji = styled.div`
  font-size: ${64 / 16}rem;
`;
