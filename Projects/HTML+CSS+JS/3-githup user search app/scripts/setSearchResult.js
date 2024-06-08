import { cardsElement } from "./Element.js";
import { fetchUserDetails } from "./fetchUserDetails.js";

const setSearchResult = async (data) => {
  let result = "";
  if (data === null) {
    result = "";
  } else if (data.length !== 0) {
    const promises = data.map(async (item) => {
      const newData = await fetchUserDetails(item.login);
      return `
        <article class="card text-center">
          <a href ="${item.html_url}" target="_blank">
            <img class="img" loading="lazy" src="${item.avatar_url}"/>
            <h2 class="name"> ${item.login}</h2>
          </a>
          <p class="repo">Repositories: ${newData[0]}</p>
          <p class="followers">Followers: ${newData[1]}</p>
        </article>
      `;
    });

    const cardHTMLs = await Promise.all(promises);

    result = cardHTMLs.join("");
  } else {
    result = "<p>No results found.</p>";
  }
  cardsElement.innerHTML = result;
};

export { setSearchResult };
