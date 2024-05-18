const PI = 3.14;
let radius = 3;
let area = 0;
circleArea(radius)
radius = 4
circleArea(radius)
function circleArea(radius) {
    area = radius * radius * PI;
    console.log("radius:", radius)
}