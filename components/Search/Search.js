import { useContext, useState } from "react";

import Image from "next/image";
import WordContext from "../../context/WordContext";
import { fetchWords } from "../../lib/load-words";
import searchIcon from "../../public/images/icon-search.svg";
import styled from "styled-components";

const Search = () => {
  const [search, setSearch] = useState("");

  const { setWords } = useContext(WordContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search === "") return;

    try {
      const data = await fetchWords(search);
      setWords(data[0]);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      {/* TODO: insert label, and visually hide it */}
      <Input type="text" value={search} onChange={handleChange} />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
        {/* <Image src={searchIcon} alt="search" priority={true} /> */}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-100);
  border-radius: 1rem;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 0.875rem 1.5rem;
`;

const Button = styled.button`
  all: unset;
  padding-right: 1.5rem;
`;

export default Search;
