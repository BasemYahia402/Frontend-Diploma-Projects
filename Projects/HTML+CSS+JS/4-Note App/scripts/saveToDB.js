export const saveToDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
