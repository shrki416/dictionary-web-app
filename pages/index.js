import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";
import Header from "../components/Header";
import { Howl } from "howler";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
/*
  This is to fetch data from an API, when ready
*/
import { fetchWords } from "../lib/load-words";
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
          <input type="search" name="" id="" />
          <p>{word}</p>
          <p>{phonetic}</p>
          <Image
            src="./images/icon-play.svg"
            width={50}
            height={50}
            onClick={() => sound.play()}
            alt="play button"
          />

          {meanings.map((meaning) => {
            const uniqueId = useId();
            return (
              <div key={uniqueId}>
                <p>{meaning.partOfSpeech}</p>
                <p>Meanings</p>
                {meaning.definitions.map((definition) => {
                  return (
                    <ul key={definition.definition}>
                      <li>{definition.definition}</li>
                    </ul>
                  );
                })}
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
  using SVG as components imports:
  https://www.youtube.com/watch?v=9tJTEGG0t-M

  Other resources:
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
*/
