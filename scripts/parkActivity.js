import { getActivities } from "./database.js";

const parkActivities = getActivities();

export const ActivitiesHTML = () => {
  let html = "<ul>";
  for (const activity of parkActivities) {
    html += `<li>${activity.name}</li>`;
  }
  html += "</ul>";
  return html;
};
