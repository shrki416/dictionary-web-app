import Image from "next/image";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Image
          src="./images/logo.svg"
          width={28}
          height={32}
          alt="logo"
          priority
        />
      </div>

      <ThemeWrapper>
        <label htmlFor="font-choice"></label>
        <Select name="font-choice" id="font-choice">
          <option value="mono">Mono</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
        </Select>

        <ThemeSwitcher>
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
        </ThemeSwitcher>
      </ThemeWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ThemeWrapper = styled.div`
  border: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  /* align-self: end; */
`;

const ThemeSwitcher = styled.div`
  display: revert;

  img {
    display: revert;
  }
`;

export default Header;
