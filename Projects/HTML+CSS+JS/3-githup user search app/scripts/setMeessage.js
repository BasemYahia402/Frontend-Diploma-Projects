import { messageElement } from "./Element";

export const setMeessage = (meessage) => {
  messageElement.textContent = meessage ? `*${meessage}` : "";
};
