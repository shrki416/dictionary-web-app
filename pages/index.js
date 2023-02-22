import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";
import Header from "../components/Header";
import { Howl } from "howler";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper/MaxWidthWrapper";
import { WORD } from "../data";
/*
  This is to fetch data from an API, when ready
*/
import { fetchWords } from "../lib/load-words";

export async function getStaticProps() {
  const words = await fetchWords("keyboard");
  console.log(words);
  return {
    props: {
      words,
    },
  };
}

export default function Home(props) {
  // console.log({ WORD });

  const word = props.words[0];
  console.log(`🍏`, word);

  const audioFile = WORD.phonetics[2].audio;

  const sound = new Howl({
    src: [audioFile],
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
          <p>{WORD.word}</p>
          <p>{WORD.phonetic}</p>
          <Image
            src="./images/icon-play.svg"
            width={50}
            height={50}
            onClick={() => sound.play()}
            alt="play button"
          />
          {/* <audio controls src={audioFile}>
            Your browser does not support the
            <code>audio</code> element.
          </audio> */}
        </main>
        <footer>
          <p>Source</p>
          <Link href={WORD.sourceUrls[0]}>
            {WORD.sourceUrls[0]}
            <span>
              <Image
                src="./images/icon-new-window.svg"
                width={15}
                height={15}
                alt="source link"
              />
            </span>
          </Link>
        </footer>
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
*/
