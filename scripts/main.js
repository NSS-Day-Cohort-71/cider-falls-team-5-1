import { ParkAreasHTML } from "./parkArea.js";
const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__parks">
        <h2>Parks</h2>
        ${ParkAreasHTML()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
       
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
   
</article>
`;

mainContainer.innerHTML = applicationHTML;
