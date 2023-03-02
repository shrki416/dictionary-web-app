import Logo from "./Logo";
import MoonIcon from "./MoonIcon";
import styled from "styled-components";

const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>

      <ThemeWrapper>
        <Select
          name="font"
          onChange={(e) => {
            const font = e.target.value;
            document.body.style.fontFamily = `var(--ff-${font})`;
          }}
        >
          <option value="mono">Mono</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
        </Select>

        <ThemeSwitcher>
          <ToggleLabel htmlFor="toggle">
            <VisuallyHidden type="checkbox" id="toggle" />
            <ToggleSwitch onClick={toggleTheme} />
          </ToggleLabel>

          <MoonIcon theme={theme} />
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
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  /* all: unset; */
  cursor: pointer;
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
