/*

Title of project
Author's name

Description of this script in the context of the project

*/

$(document).ready(function() {

  var floatSide = [ "right", "left"];
  var borderStyles = [ "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
  var num;
  var num2;
  num=Math.floor(Math.random()*2);
  num2=Math.floor(Math.random()*8);


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


$("*").hide();

$("*").click (function(){
  $(this).data('clicked', true);
});


 if ($("div").data('clicked', false)){
    $("div").show()

  }
    else if ($("div").data('clicked',true)){
      $("div").hide();
      console.log("hey")
    }

});
