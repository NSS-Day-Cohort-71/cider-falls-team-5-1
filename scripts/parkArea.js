import { getAreas, getGuests } from "./database.js";

const parkAreas = getAreas();

export const ParkAreasHTML = () => {
  let html = "<ul>";
  for (const parkArea of parkAreas) {
    html += `<li class ="area"
                 data-type = "area" 
                    data-id = "${parkArea.id}"> 
                       ${parkArea.name}</li>`;
  }
  html += "</ul>";
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
