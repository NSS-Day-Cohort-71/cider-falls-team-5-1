import { ActivitiesHTML } from "./parkActivity.js";
import { ParkAreasHTML } from "./parkArea.js";
import { guestsHTML } from "./parkGuests.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
        
         <div class="image-container">
        <img src="assets/Cider Falls Logo.png" alt="Cider Falls National Park" class="image">
    </div>
 <div class="details-container">
    <article class="details_activity">
    <section class="detail--column list details__activity">
        <h2>Activities</h2>
      <ul class= "activity"  ${ActivitiesHTML()}
    </section>
</article>
</div>
    <div class="details-container">
        <article class="details__parks">

            <ul class="areas">

                ${ParkAreasHTML()}
            </ul>
        </article>

        <article class="details__guests">
            <h2>Guests</h2>
            <ul class="guest">
                ${guestsHTML()}
            </ul>
        </article>
    </div>
  
`;

mainContainer.innerHTML = applicationHTML;
