import { useEffect, useState } from "react";

import styled from "styled-components";

const VisuallyHidden = ({ children, ...delegated }) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (e) => {
        if (e.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (e) => setForceShow(false);

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default VisuallyHidden;
