import styled from "styled-components";

const Definition = ({ meanings }) => {
  return meanings?.map(({ partOfSpeech, definitions, synonyms }) => {
    return (
      <div key={definitions}>
        <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
        <Meaning>Meanings</Meaning>
        <List>
          {definitions.map(({ definition, example }) => {
            return (
              <ListItem key={definition}>
                <p>{definition}</p>
                <p>{example}</p>
              </ListItem>
            );
          })}
        </List>
        {synonyms.length > 0 && (
          <p>
            Synonyms <span>{synonyms.join(", ")}</span>
          </p>
        )}
      </div>
    );
  });
};

const PartOfSpeech = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-style: italic;
  font-size: ${18 / 16}rem;
  line-height: ${24 / 16}rem;
  color: var(--gray-500);

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
`;

const List = styled.ul`
  font-size: ${15 / 16}rem;
  padding-left: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 12px;

  &::marker {
    color: var(--primary);
  }
`;

export default Definition;
