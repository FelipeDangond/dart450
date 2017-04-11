/*

Title of project
Author's name

Description of this script in the context of the project

*/


$('head').append('<link href="https://fonts.googleapis.com/css?family=Asset|Astloch|Cinzel+Decorative|Great+Vibes|Griffy|Kumar+One|Miss+Fajardose|Pirata+One|Press+Start+2P" rel="stylesheet">');



$("*").css({
  "background-color": "#" + Math.floor(Math.random()*16777215).toString(16)
});


var fonts = [ "Arial", "Verdana", "Helvetica", "Molle", "Pirata One","Kumar One", "Cinzel Decorative", "Griffy", "Press Start 2P", "Great Vibes", "Miss Fajardose", "Asset", "Astloch"];

var fontSizes = [
  "1em","22.2em","2.5em","3em","60.5em","1.5em"
];

var colors = ["#" + Math.floor(Math.random()*16777215).toString(16), "black"];

var marginRights = [
  "0px", "2px", "4px", "5px", "30px", "20px"
];

var marginBottom = [
  "0px", "2px", "4px", "5px", "30px", "20px"
];

var transforms = [
  "rotateZ(100deg)", "rotateZ(0)", "rotateZ(100deg)", "rotateZ(500deg)", "rotateZ(400deg)", "rotateZ(-700deg)", "rotateZ(0)", "rotateZ(10deg)", "rotateZ(20deg)", "rotateZ(0deg)"
];

var backgroundColors = ["#" + Math.floor(Math.random()*16777215).toString(16), "white"]

var borders = [
  "9px groove", "90px double", "60px solid", "15px dotted", "2px solid", "2px dotted"
];

var perspective = [
  "500px", "200px", "-700px"
];


$(document).ready(function() {

  // Use blast to target characters
  $('body').blast({
    delimiter: 'character'
  });

  // Go through each element with the 'blast' class and assign
  // a random set of CSS to it
  $('.blast').each(randomFont);

});

// randomFont
//
// For each character targeted by Blast we just set its CSS to random
// entries from our arrays...
function randomFont () {
  $(this).css({
    display: 'inline-block', // Needed for changing the transform
    fontFamily: getRandomElement(fonts),
    fontSize: getRandomElement(fontSizes),
    color: getRandomElement(colors),
    backgroundColor: getRandomElement(backgroundColors),
    border: getRandomElement(borders),
    marginRight: getRandomElement(marginRights),
    marginBottom: getRandomElement(marginBottom),
    transform: getRandomElement(transforms),
    webkitPerspective: getRandomElement(transforms)
  })
}

// getRandomElement (array)
//
// Helper function get pull a random element from an array
function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
}
