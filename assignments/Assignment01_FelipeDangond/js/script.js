/*

Dart 450 - Assignment 01: Interactive Personality
Felipe Dangond

Create a personal webpage/landing page(s) that reflects some aspect(s) of your online personality.

*/

$(document).ready(function initialfunction() {

  var sound = new Audio("click.wav");
  sound.preload = 'auto';
  sound.load();

  var floatSide = [ "right", "left"];
  var borderStyles = [ "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
  var num;
  var num2;
  num=Math.floor(Math.random()*2);
  num2=Math.floor(Math.random()*8);

  function playSound(volume) {
  var click= sound.cloneNode();
  click.volume=volume;
  click.play();
}



  //function for the randomization of colors
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);


  /////////this function allows to randomizes divs' sizes. We can also set a max and a min (and also specify the unit)
  var options = {
      width: {
          min: 70,
          max: 100,
          unit: '%'
      },
      height: {
          min: 70,
          max: 100,
          unit: '%'
      }

  }
  function getRandomInt (min, max, unit) {
      return Math.floor(Math.random() * (max - min + 1)) + min + unit;
  }


  $("body").css({
      "background-color": randomColor
    });


   function randomizeColorAndSize() {
  var divs = document.querySelectorAll( 'div');
  for (var p = 0; p < divs.length; p++) {

    divs[p].style.float = floatSide[num];


    divs[p].style.bottom = "0px";

    divs[p].style.backgroundColor =  "#" + Math.floor(Math.random()*16777215).toString(16);
    divs[p].style.borderStyle =  [ "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"][Math.floor(Math.random()*8)];
    divs[p].style.borderColor =  "#" + Math.floor(Math.random()*16777215).toString(16);
    divs[p].style.borderWidth =  "3px";

    divs[p].style.width = getRandomInt(options.width.min,options.width.max, options.width.unit);

    divs[p].style.height = getRandomInt(options.height.min,options.height.max, options.height.unit) ;
  }
}
randomizeColorAndSize();


//hide and show the divs
// I tried implementing alerts saying facts about me and my personnality but everytime you would click the next div,
//...it would recall the previous alerts

$("div").hide();



$( "body" ).click(function() {


//  alert ("I'm Felipe, nice to meet you.")
  $( "#one" ).show();
});

$( "#one" ).click(function() {
//  alert ("I'm a studying computation arts at Concordia, I'm 19 years old and I was born in Colombia.")
  $( "#two" ).show();
});


$( "#two" ).click(function() {
//  alert ("I'm really into web design and mostly net.art. I love creating new things and changing conventional structures")
  $( "#three" ).show();
});


$( "#three" ).click(function() {
  $( "#four" ).show();
//  alert("I have a passion for fashion, tech, old country music, discovering treasures in thriftshops.")
});


$( "#four" ).click(function() {
  $( "#five" ).show();
//  alert("I have a slight addiction to coffee and wine")
});


$( "#five" ).click(function() {
  $( "#six" ).show();
});


$( "#six" ).click(function() {
  $( "#seven" ).show();
});

$( "#seven" ).click(function() {
  $( "#eight" ).show();
});

$( "#eight" ).click(function() {
  $( "#nine" ).show();
});

$( "#nine" ).click(function() {
  $( "#ten" ).show();
});

$( "#ten" ).click(function() {
  $( "#eleven" ).show();
});

$( "#eleven" ).click(function() {
  $( "#twelve" ).show();
});

$( "#twelve" ).click(function() {
  $( "#thirteen" ).show();
});

$( "#thirteen" ).click(function() {
  $( "#fourteen" ).show();
});

$( "#fourteen" ).click(function() {
  $( "#fifteen" ).show();
});

$( "#fifteen" ).click(function() {
  $( "#sixteen" ).show();
});

$( "#sixteen" ).click(function() {
  $( "#seventeen" ).show();
});

$( "#seventeen" ).click(function() {
  $( "#eighteen" ).show();
});

$( "#eighteen" ).click(function() {
  $( "#nineteen" ).show();
});

$( "#nineteen" ).click(function() {
  $( "#twenty" ).show();
});

});
