import Image from "next/image";
import searchIcon from "../../public/images/icon-search.svg";
import styled from "styled-components";

const Search = ({ change, value, submit }) => {
  return (
    <Wrapper onSubmit={submit}>
      <Input type="text" value={value} onChange={change} />
      <Button>
        <Image src={searchIcon} alt="search" />
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
