import { swimsuits } from "./swimsuits.js";

let swimsuit = null;

document.addEventListener("DOMContentLoaded", () => {
    const id = getSwimsuitId();
    if (id) {
        swimsuit = swimsuits.find(swimsuit => swimsuit.id == id);
        const html = RenderBuyScreen(swimsuit);
        document.getElementById('swimsuit').innerHTML = html;
        document.getElementById("submit").addEventListener("click", AddToQuantity);
    }

})
function getSwimsuitId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function RenderBuyScreen(swimsuit) {
    return `<img src="${swimsuit.image}" alt="${swimsuit.image_alt}" id = "image">
        <h3>${swimsuit.name}</h3>
        <p id="description">${swimsuit.desc}</p>
        <p id="price">$${swimsuit.price}</p>
        <fieldset id="buy">
            <legend>Buy Now</legend>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value="1">
            <button id="submit" type="submit">Submit</button>
        </fieldset>`
}

function AddToQuantity() {
    const quantity = parseInt(document.getElementById("quantity").value);
    swimsuit.quantity = (swimsuit.quantity || 0) + parseInt(quantity);
    localStorage.setItem("swimsuit" + swimsuit.id, JSON.stringify(swimsuit));
    console.log(`Quantity for ${swimsuit.name} is now ${swimsuit.quantity}`);
}