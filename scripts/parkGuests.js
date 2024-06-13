import { getGuests } from "./database.js";

const guests = getGuests();

export const guestsHTML = () => {
  let html = "<ul>";
  for (const guest of guests) {
    html += `<li class ="guest">${guest.name}</li>`;
  }
  html += "</ul>";
  return html;
};
