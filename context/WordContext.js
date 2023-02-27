import { createContext, useEffect, useState } from "react";

import { fetchWords } from "../lib/load-words";

const WordContext = createContext();

export function WordProvider({ children }) {
  const [words, setWords] = useState("");

  useEffect(() => {
    const fetchKeyboard = async () => {
      const data = await fetchWords("keyboard");
      setWords(data[0]);
    };

    fetchKeyboard();
  }, []);

  return (
    <WordContext.Provider value={{ words, setWords }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordContext;
