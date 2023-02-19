import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <>
      <GlobalStyles />
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Dictionary Web App" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <header>
          <Image
            src="./images/logo.svg"
            width={30}
            height={30}
            alt="logo"
            priority
          />
          <label htmlFor="font-choice"></label>

          <select name="font-choice" id="font-choice">
            <option value="mono">Mono</option>
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans Serif</option>
          </select>

          {/* toggle switch */}
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle"></label>

          <Image
            src="./images/icon-moon.svg"
            width={20}
            height={20}
            alt="icon"
            priority
          />
        </header>
        <main>
          <input type="search" name="" id="" />
          <p>{WORD.word}</p>
          <p>{WORD.phonetic}</p>
          <Image src="./images/icon-play.svg" width={50} height={50} />
          <audio controls src={audioFile}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
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
      </div>
    </>
  );
}

/* 
  using SVG as components imports:
  https://www.youtube.com/watch?v=9tJTEGG0t-M

  Other resources:
  - This is to fetch data from an API
  https://medium.com/@kusuma844/easiest-way-for-next-js-to-fetch-external-api-for-displaying-data-2ebabbdd3c9e
*/
