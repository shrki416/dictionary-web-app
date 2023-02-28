import { Howl } from "howler";
import WordContext from "../../context/WordContext";
import styled from "styled-components";
import { useContext } from "react";

const Word = () => {
  const { words } = useContext(WordContext);

  const { word, phonetic, phonetics } = words;

  const audioFile = phonetics
    ?.map(({ audio }) => {
      if (audio.endsWith("-us.mp3")) {
        return audio;
      }
    })
    .filter((audio) => audio);

  const playSound = () => {
    let audio;
    if (audio === undefined) {
      audio = new Howl({
        src: audioFile,
      });

      audio.play();
    }
  };

  return (
    <Wrapper>
      <Header>
        {word}
        <Phonetic>{phonetic}</Phonetic>
      </Header>
      {audioFile?.length > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          onClick={playSound}
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  color: var(--gray-500);
  margin: 24px 0 32px;

  & svg {
    justify-self: end;
    cursor: pointer;
    width: ${48 / 16}rem;
    height: ${48 / 16}rem;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.body};
`;

const Phonetic = styled.span`
  display: block;
  color: var(--primary);
  font-size: ${18 / 16}rem;
  line-height: ${24 / 16}rem;
`;

export default Word;
