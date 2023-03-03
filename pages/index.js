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
          <link rel="canonical" href="" />
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

/* 
resources:

  * This is to fetch data from an API
  https://medium.com/@kusuma844/easiest-way-for-next-js-to-fetch-external-api-for-displaying-data-2ebabbdd3c9e

  * Darkmode resource using styled-components:
  https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a

  * Select accessibility styles:
  https://dev.to/emmabostian/creating-a-custom-accessible-drop-down-3gmo
  https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
  https://codepen.io/sandrina-p/pen/YzyOYRr
  https://towardsdev.com/how-to-create-an-accessible-custom-select-dropdown-in-react-9d9858415f10 - select in react
  https://codepen.io/tcomdev/pen/WNXeqoG?editors=1010 - select in react

  * font optimization in next.js:
  https://blog.logrocket.com/next-js-font-optimization/
  https://web.dev/variable-fonts/

  * line after text:
  https://stackoverflow.com/questions/38202019/css-horizontal-line-on-one-side-of-text

  * supress audio warning for AudioContext:
  https://stackoverflow.com/questions/70127003/howler-js-react-audiocontext-console-warning
*/
