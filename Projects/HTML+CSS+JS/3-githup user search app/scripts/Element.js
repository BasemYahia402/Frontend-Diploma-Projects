const isUserSelected = document.querySelector('[value="users"]');
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".button");
const USERS_API = "https://api.github.com/search/users?q=";
const cardsElement = document.querySelector(".cards");
const messageElement = document.querySelector(".message");
const loaderElement = document.querySelector(".loader");
export {
  isUserSelected,
  searchInput,
  searchButton,
  USERS_API,
  cardsElement,
  messageElement,
  loaderElement,
};
