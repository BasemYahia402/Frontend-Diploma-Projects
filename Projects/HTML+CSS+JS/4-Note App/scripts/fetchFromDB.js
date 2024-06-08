export const fetchFromDB = (key) => {
  const Notes = localStorage.getItem(key);
  return Notes ? JSON.parse(Notes) : [];
};
