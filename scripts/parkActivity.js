import { getActivities, getAreas } from "./database.js";

const parkActivities = getActivities();
const parkAreas = getAreas();

export const ActivitiesHTML = () => {
  let html = "<ul>";
  for (const activity of parkActivities) {
    html += `<li class = "area"
    data-type="activity"
    data-id="${activity.id}"
    data-activityName="${activity.name}"
     >${activity.name}</li>`;
  }
  html += "</ul>";
  return html;
};

//all parks that have this activity will be shown
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let activityId = parseInt(itemClicked.dataset.id);
  let parkActivityName = itemClicked.dataset.activityname;

  if (itemClicked.dataset.type === "activity") {
    const parksWithActivity = parkAreas.filter((park) =>
      park.activityId.includes(activityId)
    );
    let message = `${parkActivityName} is available in `;

    if (parksWithActivity.length === 0) {
      message += `none of the available parks `;
    } else {
      const parkNames = parksWithActivity
        .map((park) => park.name)
        .sort()
        .join(", ");
      message += parkNames;
    }
    window.alert(message);

    // for (const area of parkAreas) {
    //   if (activityId === parseInt(area.activityId)) {
    //     window.alert(
    //       `${itemClicked.dataset.activityname} is available at ${area.name}`
    //     );
    //   }
    // }
  }
});