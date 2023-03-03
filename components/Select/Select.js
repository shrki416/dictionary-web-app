import { useEffect, useState } from "react";

import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import styled from "styled-components";

const FONTS = [
  {
    label: "Mono",
    value: "mono",
  },
  {
    label: "Serif",
    value: "serif",
  },
  {
    label: "Sans-serif",
    value: "sans-serif",
  },
];

const Select = () => {
  const [font, setFont] = useState(FONTS[0].value);

  useEffect(() => {
    document.body.style.fontFamily = `var(--ff-${font})`;
  }, [font]);

  return (
    <div>
      <VisuallyHidden>
        <label htmlFor="font-select">Select your font preference:</label>
      </VisuallyHidden>
      <NativeSelect id="font-select" onChange={(e) => setFont(e.target.value)}>
        {FONTS.map(({ label, value }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </NativeSelect>
    </div>
  );
};

const NativeSelect = styled.select`
  cursor: pointer;
  font-weight: 700;
  font-size: ${18 / 16}rem;
  border: none;
  padding: 0.25rem 0.5rem;
`;

export default Select;
