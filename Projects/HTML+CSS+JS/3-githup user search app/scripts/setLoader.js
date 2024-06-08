import { loaderElement } from "./Element";
import { setSearchResult } from "./setSearchResult";

export const setLoader = (loaderState) => {
  loaderElement.classList.toggle("hidden", !loaderState);
  loaderState && setSearchResult(null);
};
