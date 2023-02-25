import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";
import Header from "../components/Header";
import { Howl } from "howler";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import Search from "../components/Search";
/*
  This is to fetch data from an API, when ready
*/
import { fetchWords } from "../lib/load-words";
import playIcon from "../public/images/icon-play.svg";
import { useId } from "react";

export async function getStaticProps() {
  const words = await fetchWords("keyboard");
  return {
    props: {
      words,
    },
  };
}

export default function Home({ words }) {
  console.log(words);
  const { word, meanings, phonetics, phonetic, sourceUrls } = words[0];

  const audioFile = phonetics
    .map((phonetic) => {
      const { audio } = phonetic;
      if (audio) {
        return audio;
      }
    })
    .filter((audio) => audio);

  const sound = new Howl({
    src: audioFile,
  });

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
          <p>{word}</p>
          <p>{phonetic}</p>
          <Image
            src={playIcon}
            onClick={() => sound.play()}
            alt="play button"
          />

          {meanings.map(({ partOfSpeech, definitions, synonyms }) => {
            const uniqueId = useId();
            return (
              <div key={uniqueId}>
                <p>{partOfSpeech}</p>
                <p>Meanings</p>
                {definitions.map(({ definition, example }) => {
                  return (
                    <ul key={definition}>
                      <li>{definition}</li>
                      <p>{example}</p>
                    </ul>
                  );
                })}
                {synonyms.length > 0 && (
                  <p>
                    Synonyms <span>{synonyms.join(", ")}</span>
                  </p>
                )}
              </div>
            );
          })}
        </main>
        <Footer sourceUrls={sourceUrls} />
      </MaxWidthWrapper>
    </>
  );
}

/* 
resources:

  - This is to fetch data from an API
  https://medium.com/@kusuma844/easiest-way-for-next-js-to-fetch-external-api-for-displaying-data-2ebabbdd3c9e

  Darkmode resource using styled-components:
  https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a

  Select accessibility styles:
  https://dev.to/emmabostian/creating-a-custom-accessible-drop-down-3gmo
  https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
  https://codepen.io/sandrina-p/pen/YzyOYRr
  https://towardsdev.com/how-to-create-an-accessible-custom-select-dropdown-in-react-9d9858415f10 - select in react
  https://codepen.io/tcomdev/pen/WNXeqoG?editors=1010 - select in react

  font optimization in next.js:
  https://blog.logrocket.com/next-js-font-optimization/
  https://web.dev/variable-fonts/
*/
