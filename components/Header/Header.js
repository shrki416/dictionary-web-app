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
          <ToggleLabel htmlFor="toggle">
            <VisuallyHidden type="checkbox" id="toggle" />
            <ToggleSwitch />
          </ToggleLabel>

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
  /* border: 1px solid var(--gray-200); */
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  /* align-self: end; */
  all: unset;

  & [slot="option"] {
    margin-top: 0.5rem;
    border: 1px solid red;
  }
`;

const ThemeSwitcher = styled.div`
  display: flex;

  img {
    display: revert;
  }
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 12px;
`;

const ToggleSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: var(--gray-300);
  border-radius: 10px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    content: "";
    position: absolute;
    height: ${14 / 16}rem;
    width: ${14 / 16}rem;
    left: 3px;
    bottom: 3px;
    background-color: var(--white);
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: var(--primary);
  }

  input:focus + & {
    box-shadow: 0 0 1px var(--primary);
  }

  input:checked + &:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;

const VisuallyHidden = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default Header;
