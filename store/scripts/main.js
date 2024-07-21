import { swimsuits } from "./swimsuits.js";

let filteredSwimsuits = [...swimsuits];

function getAllLooks() {
    const allLooks = new Set();
    swimsuits.forEach(swimsuit => swimsuit.look.forEach(look => allLooks.add(look)));
    return Array.from(allLooks);
}

function createFilterCheckboxes() {
    const filterContainer = document.getElementById('filter');
    const looks = getAllLooks();

    looks.forEach(look => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'look';
        checkbox.value = look;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(look));
        filterContainer.appendChild(label);
    });
}

function RenderSwimsuits() {
    let html = "";
    filteredSwimsuits.forEach(swimsuit => {
        html += SwimsuitTemplate(swimsuit);
    });
    document.getElementById('swimsuits').innerHTML = html;
}

function SwimsuitTemplate(swimsuit) {
    return `<a href="store.html?id=${swimsuit.id}" id="${swimsuit.id}" class="photos"><img src="${swimsuit.image}" alt="${swimsuit.image_alt}" width="250px"></a>`;
}

function filterSwimsuits() {
    const checkedBoxes = document.querySelectorAll('input[name="look"]:checked');
    const selectedLooks = Array.from(checkedBoxes).map(cb => cb.value);

    if (selectedLooks.length === 0) {
        filteredSwimsuits = [...swimsuits];
    } else {
        filteredSwimsuits = swimsuits.filter(swimsuit =>
            selectedLooks.some(look => swimsuit.look.includes(look))
        );
    }

    RenderSwimsuits();
}

document.addEventListener('DOMContentLoaded', () => {
    createFilterCheckboxes();
    RenderSwimsuits();

    // Move this inside the DOMContentLoaded event
    const checkBoxes = document.querySelectorAll('input[name="look"]');
    checkBoxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterSwimsuits);
    });
});