import { recipes } from "./recipes.js";

function Random(num) {
    return Math.floor(Math.random() * num);
}

function GetRandomRecipe(list) {
    const listlength = list.length;
    const random = Random(listlength);
    return list[random];
}

function RecipeTemplate(recipe) {
    return '\
    <div id="recipe">\
        <img src="' + recipe.image + '"\
        alt=' + recipe.name + '\
        id="' + recipe.name + '-img">\
        <div id="info">\
            <div id="tags">\
                ' + tagsTemplate(recipe.tags) + '\
            </div>\
            <div id="desc">\
                <h2>' + recipe.name + '</h2>\
                ' + ratingTemplate(recipe.rating) + '\
                <p> ' + recipe.description + '</p>\
            </div>\
        </div>\
    </div>';
}

function tagsTemplate(tags){
    let html = '';
    tags.forEach(tag => {
        html += '<p>' + tag + '</p>';
    });

    return html;
}

function ratingTemplate(rating) {
    let html = '<span\
    class="rating"\
    role="img"\
    aria-label="Rating: ${rating} out of 5 stars">'

    for (let index = 1; index < 6; index++) {
        if (index <= rating) {
            html += '<span aria-hidden="true"\
            class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true"\
            class="icon-star-empty">☆</span>';
        }
    }
    
    html += '</span>';
    return html;
}

function renderRecipes(recipeList) {
    let html = '';
        // get the element we will output the recipes into
        recipeList.forEach(recipe => {
        
        // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
        html += RecipeTemplate(recipe);

        // Set the HTML strings as the innerHTML of our output element
    });
    document.getElementById('recipes').innerHTML = html;
}

function init() {
  // get a random recipe
  const recipe = GetRandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

function filter(query) {
    const filtered = recipes.filter(recipe => {
        const filterednames = recipe.name.toLowerCase().includes(query);
        const filteredtags = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        return filterednames || filteredtags
    });
    const sorted = filtered.sort((a,b) => a.name.localeCompare(b.name));
    return sorted;
}


function searchHandler(e) {
    e.preventDefault();
    let search = document.getElementById('searchbar').value;
    const searchlower = search.toLowerCase();
    const filteredrecipes = filter(searchlower);
    renderRecipes(filteredrecipes);
}

document.getElementById('buttonimg').addEventListener('click', searchHandler);