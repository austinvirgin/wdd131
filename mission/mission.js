const themeSelector = document.querySelector('#dark-mode');

function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!

currentValue = themeSelector.value;

if (currentValue == 'dark')
    {
        const bodySelector = document.body;
        bodySelector.id = "dark";
        
        const image = document.body.querySelector(".logo");
        image.setAttribute("src", "byui-logo_white.png");
    }

else
    {
        const bodySelector = document.body
        bodySelector.removeAttribute("id");

        const image = document.body.querySelector(".logo");
        image.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener("change", changeTheme);