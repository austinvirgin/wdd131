document.addEventListener("DOMContentLoaded", () => {
    let html = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('swimsuit')) {
            try {
                let storedSwimsuit;
                const storedData = localStorage.getItem(key);
                
                // Try parsing as is (for new format)
                try {
                    storedSwimsuit = JSON.parse(storedData);
                } catch {
                    // If that fails, try adding curly braces (for old format)
                    storedSwimsuit = JSON.parse(`{${storedData}}`);
                }

                if (storedSwimsuit && storedSwimsuit.quantity > 0) {
                    html += RenderSwimsuit(storedSwimsuit);
                }
            } catch (error) {
                console.error(`Error parsing swimsuit data for key ${key}:`, error);
            }
        }
    }
    document.getElementById('cartstore').innerHTML = html;
});

function RenderSwimsuit(swimsuit) {
    return `
        <div class="cart-item">
            <h5 class="swimsuit">${swimsuit.name} - ${swimsuit.quantity} quantity</h5>
            <p class="price">$${swimsuit.price}</p>
        </div>
    `;
}