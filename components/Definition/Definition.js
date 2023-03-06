import { useContext, useId } from "react";

import { QUERIES } from "../../constants";
import WordContext from "../../context/WordContext";
import { fetchWords } from "../../lib/load-words";
import styled from "styled-components";

const Definition = () => {
  const { words, setWords } = useContext(WordContext);
  const { meanings } = words;

  const id = useId();

  async function getWordDefinition(word) {
    try {
      const data = await fetchWords(word);
      data?.[0] && setWords(data?.[0]);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  return meanings?.map(({ partOfSpeech, definitions, synonyms }, index) => {
    return (
      <section key={`${id}_${index}`}>
        <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
        <Meaning>Meanings</Meaning>
        <List>
          {definitions.map(({ definition, example }, index) => {
            return (
              <ListItem key={`${id}_${index}`}>
                <DefinitionBody>{definition}</DefinitionBody>
                <Example>{example && `"${example}"`}</Example>
              </ListItem>
            );
          })}
        </List>
        {synonyms.length > 0 && (
          <Synonyms>
            Synonyms{" "}
            {synonyms.map((word) => {
              return (
                <span key={id} onClick={() => getWordDefinition(word)}>
                  {word}
                </span>
              );
            })}
          </Synonyms>
        )}
      </section>
    );
  });
};

const PartOfSpeech = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-style: italic;
  font-weight: 700;
  font-size: ${18 / 16}rem;
  line-height: ${24 / 16}rem;
  color: ${({ theme }) => theme.body};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${24 / 16}rem;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: var(--gray-200);
    margin-left: 8px;
  }
`;

const Meaning = styled.p`
  font-size: ${16 / 16}rem;
  color: var(--gray-300);
  margin-bottom: 1rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${20 / 16}rem;
  }
`;

const List = styled.ul`
  font-size: ${15 / 16}rem;
  padding-left: 1rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
    line-height: ${24 / 16}rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 12px;

  &::marker {
    color: var(--primary);
  }
`;

const DefinitionBody = styled.p`
  color: ${({ theme }) => theme.body};
  margin-bottom: 8px;
`;

const Example = styled.p`
  color: var(--gray-300);
`;

const Synonyms = styled.p`
  font-size: ${20 / 16}rem;
  font-weight: 700;
  color: var(--gray-300);
  line-height: ${24 / 16}rem;

  & span {
    color: var(--primary);
    line-height: ${24 / 16}rem;
    margin-left: 1.5rem;
    display: inline;
    cursor: pointer;
  }

  & span:hover {
    text-decoration: underline;
  }
`;

export default Definition;
