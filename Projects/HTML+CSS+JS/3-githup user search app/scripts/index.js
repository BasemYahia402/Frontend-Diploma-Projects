import { isUserSelected, searchInput, searchButton } from "./Element.js";

import { performSearch } from "./performSearch.js";

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, isUserSelected.checked);
});
