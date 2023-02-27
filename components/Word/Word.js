import { Howl } from "howler";
import Image from "next/image";
import WordContext from "../../context/WordContext";
import playIcon from "../../public/images/icon-play.svg";
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

  const sound = new Howl({
    src: audioFile,
    autoplay: false,
    loop: false,
  });

  return (
    <Wrapper>
      <Header>
        {word}
        <Phonetic>{phonetic}</Phonetic>
      </Header>
      {audioFile?.length > 0 && (
        <Image
          src={playIcon}
          onClick={() => sound.play()}
          alt="play button"
          width="auto"
          height="auto"
        />
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

  & img {
    justify-self: end;
    cursor: pointer;
    width: ${48 / 16}rem;
    height: ${48 / 16}rem;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text};
`;

const Phonetic = styled.span`
  display: block;
  color: var(--primary);
  font-size: ${18 / 16}rem;
  line-height: ${24 / 16}rem;
`;

export default Word;
