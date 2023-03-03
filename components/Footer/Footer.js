import Image from "next/image";
import Link from "next/link";
import { QUERIES } from "../../constants";
import WordContext from "../../context/WordContext";
import newWindowIcon from "../../public/images/icon-new-window.svg";
import styled from "styled-components";
import { useContext } from "react";

const Footer = () => {
  const { words } = useContext(WordContext);

  const { sourceUrls } = words;

  return (
    <Wrapper>
      <SourceHeader>
        {sourceUrls?.length > 1 ? "Sources" : "Source"}
      </SourceHeader>
      {sourceUrls?.map((url) => {
        return (
          <Link key={url} href={url} target="_blank">
            {url}
            <span>
              <Image src={newWindowIcon} alt="new window" />
            </span>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--gray-200);
    margin: 32px 0 24px;
    --font-size: ${14 / 16}rem;
  }

  & a {
    font-size: var(--font-size);
    color: ${({ theme }) => theme.body};
    margin-top: 0.5rem;
    cursor: pointer;
  }

  & img {
    display: revert;
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
    margin-left: 1rem;
  }

  @media ${QUERIES.tabletAndUp} {
    a {
      margin-left: 1rem;
    }

    img {
      margin-left: 0.5rem;
    }
  }
`;

const SourceHeader = styled.p`
  font-size: var(--font-size);
  line-height: ${18 / 16}rem;
  color: var(--gray-300);
  text-decoration: underline;

  @media ${QUERIES.tabletAndUp} {
    display: inline;
    text-decoration: none;
  }
`;

export default Footer;
