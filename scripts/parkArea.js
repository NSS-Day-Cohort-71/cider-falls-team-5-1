import { getAreas, getGuests, getActivities } from "./database.js";

const parkAreas = getAreas();
const activities = getActivities();

export const ParkAreasHTML = () => {
  let html = "";
  for (const parkArea of parkAreas) {
    html += `<div class="area" data-type="area" data-id="${parkArea.id}">
                ${parkArea.name}
                <ul>`;
    // Get activities for this park area
    const areaActivities = activities.filter(activity => parkArea.activityId.includes(activity.id));
    for (const activity of areaActivities) {
      html += `<li class = "active" >${activity.name}</li>`;
    }
    html += `</ul></div>`;
  }
  return html;
};

document.addEventListener(
  "click",
  (clickEvent) => {
      const itemClicked = clickEvent.target
      
      if (itemClicked.dataset.type === "area") {
          const areaID = parseInt(itemClicked.dataset.id)
          let guestCount = 0
          const guests = getGuests();
  
          for (const guest of guests) {  
              if (guest.parkId === areaID) {
                  guestCount++;
              }
          }
          window.alert(`there are ${guestCount} guests in this area.`);
      }
  }
)
