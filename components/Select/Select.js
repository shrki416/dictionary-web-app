import styled from "styled-components";

const Select = () => {
  return (
    <Wrapper
      name="font"
      onChange={(e) => {
        const font = e.target.value;
        document.body.style.fontFamily = `var(--ff-${font})`;
      }}
    >
      <option value="mono">Mono</option>
      <option value="serif">Serif</option>
      <option value="sans-serif">Sans-serif</option>
    </Wrapper>
  );
};

const Wrapper = styled.select`
  cursor: pointer;
  font-weight: 700;
  font-size: ${18 / 16}rem;
  border: none;
  padding: 0.25rem 0.5rem;
`;

export default Select;
