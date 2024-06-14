import { getActivities } from "./database.js";

const parkActivities = getActivities();

export const ActivitiesHTML = () => {
  let html = "<ul>";
  for (const activity of parkActivities) {
    html += `<li class = "activity">${activity.name}</li>`;
  }
  html += "</ul>";
  return html;
};
