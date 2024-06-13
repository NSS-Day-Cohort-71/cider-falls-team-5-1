import { getAreas } from "./database.js";

const parkAreas = getAreas();

export const ParkAreasHTML = () => {
  let html = "<ul>";
  for (const parkArea of parkAreas) {
    html += `<li>${parkArea.name}</li>`;
  }
  html += "</ul>";
  return html;
};
