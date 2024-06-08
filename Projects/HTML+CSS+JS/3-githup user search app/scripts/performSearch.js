import { setSearchResult } from "./setSearchResult.js";
import { USERS_API, cardsElement } from "./Element.js";
import { setMeessage } from "./setMeessage.js";
import { getMeessage } from "./getMeessage.js";
import { setLoader } from "./setLoader.js";
const performSearch = (searchInput, isUserSelected) => {
  getMeessage() && setMeessage("");
  const typeQuery = isUserSelected ? "+type:user" : "+type:org";
  if (!searchInput.trim()) {
    setMeessage("Please fill out the search filed");
    cardsElement.innerHTML = "";
    return;
  }
  setLoader(true);
  fetch(`${USERS_API}${searchInput}${typeQuery}`)
    .then((response) => response.json())
    .then((response) => setSearchResult(response.items))
    .finally(()=>(setLoader(false)));
};
export { performSearch };
