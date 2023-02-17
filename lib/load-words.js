export async function fetchWords(word) {
  const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
  const res = await fetch(`${BASE_URL}/${word}`);
  const data = await res.json();
  return data;
}
