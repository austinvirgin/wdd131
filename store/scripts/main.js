import { swimsuits } from "./swimsuits.js";

RenderSwimsuits();
function RenderSwimsuits() {
    let html = "";
    swimsuits.forEach(swimsuit => {
        html += SwimsuitTemplate(swimsuit);
    });
    document.getElementById('swimsuits').innerHTML = html;
}

function SwimsuitTemplate(swimsuit) {
    return `<a href="store.html?id=${swimsuit.id}" id="${swimsuit.id}" class="photos"><img src="${swimsuit.image}" alt="${swimsuit.image_alt}" width="250px"></a>`;
}