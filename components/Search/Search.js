import { useContext, useEffect, useRef, useState } from "react";

import SearchIcon from "./SearchIcon";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import WordContext from "../../context/WordContext";
import { fetchWords } from "../../lib/load-words";
import styled from "styled-components";

const Search = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { setWords } = useContext(WordContext);

  const onFocus = () => {
    setError(false);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (search === "") {
      setError(true);
      return;
    }

    try {
      const data = await fetchWords(search);
      data[0] ? setWords(data[0]) : setWords(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeOutline = () => {
    if (error) {
      return "var(--error)";
    }

    if (search) {
      return "var(--primary)";
    }

    if (!search || !error) {
      return "hsl(0 0% 98% 0)";
    }
  };

  return (
    <>
      <Wrapper outline={changeOutline}>
        <VisuallyHidden>
          <label htmlFor="search">Search for any word:</label>
        </VisuallyHidden>
        <Form onSubmit={onSubmit}>
          <Input
            ref={inputRef}
            type="text"
            value={search}
            id="search"
            onChange={onChange}
            onFocus={onFocus}
            placeholder="Search for any word..."
          />
          <Button>
            <SearchIcon />
          </Button>
        </Form>
      </Wrapper>
      {error && (
        <p style={{ color: `var(--error)` }}>Whoops, can&apos;t be empty...</p>
      )}
    </>
  );
};

const Wrapper = styled.div`
  border-radius: 1rem;
  outline: 1px solid ${(props) => props.outline};
`;

const Form = styled.form`
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
