/*

Ransom Blasting
Pippin Barr

Script to randomise the font for each character on a page so it looks, roughly-speaking, like a ransom note.

*/

// Some array which we'll use to randomly select CSS properties
// for each character we're targeting.

var fonts = [
  "sans-serif","courier","times","georgia","palatino","cursive","comic sans ms",
  "impact","charcoal"
];

var fontSizes = [
  "1em","2.2em","2.5em","3em","3.5em","1.5em"
]

var colors = [
  "white", "blue", "lightgrey", "lightpink"
];

var marginRights = [
  "0px", "2px", "4px", "5px", "10px", "20px"
];

var transforms = [
  "rotateZ(100deg)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(10deg)", "rotateZ(20deg)", "rotateZ(0deg)"
]

var backgroundColors = ["red", "black", "yellow", "green","grey"]

var borders = [
  "0px", "1px solid", "1px dotted", "2px solid", "2px dotted"
];

$(document).ready(function() {

  // Use blast to target characters
  $('#content').blast({
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
    transform: getRandomElement(transforms)
  })
}

// getRandomElement (array)
//
// Helper function get pull a random element from an array
function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
}
