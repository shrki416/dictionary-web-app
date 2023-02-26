import Definition from "../components/Definition";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";
import Header from "../components/Header";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import Search from "../components/Search";
import Word from "../components/Word";
import { fetchWords } from "../lib/load-words";

export async function getStaticProps() {
  const words = await fetchWords("keyboard");
  return {
    props: {
      words,
    },
  };
}

export default function Home({ words }) {
  const { meanings, sourceUrls } = words[0];

  return (
    <>
      <GlobalStyles />
      <MaxWidthWrapper>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Dictionary Web App" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <Header />
        <main>
          <Search />
          <Word {...words} />
          <Definition meanings={meanings} />
        </main>
        <Footer sourceUrls={sourceUrls} />
      </MaxWidthWrapper>
    </>
  );
}

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
*/
