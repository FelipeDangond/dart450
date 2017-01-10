


/*
DART450
Week 01
Animate on keypress
Just change the colour of the text to red if it is clicked using jQuery's
.css() function


setInterval(function(){
    if($('#myDiv').hasClass('divClassRed')){
        $('#myDiv').addClass('divClassBlue').removeClass('divClassRed');
    }else{
        $('#myDiv').addClass('divClassRed').removeClass('divClassBlue');
    }

},1000);


*/

// We use "document ready" so that our code only runs once the whole
// webpage is loaded and ready.

$(document).ready(function() {

  // We use the jQuery .click() function to "listen" for clicks on our
  // div with id "text"

  $('#inputfield').keypress(function (event) {

    // This is what we do when a key is typed

    // Inside the function "this" refers to the thing that got clicked
    // And we use .animate() to animate our input box (which has position
    // aboslute) down the page using its "top" property
    $(this).animate({
      top: "+=20px"
      },40);

      $("html").css(
        'background-color', "#" + Math.floor(Math.random()*16777215).toString(16),
        'color', "#" + Math.floor(Math.random()*16777215).toString(16)

      );




      $('#inputfield').click(function () {

    // This is what we do when it is clicked

    // Inside the function "this" refers to the thing that got clicked
    // And we use .css() to set its CSS color property to ""
    $("*").css(
      'color', "#" + Math.floor(Math.random()*16777215).toString(16)

    );


    // What would happen if we didn't use "this" and used "#text" instead?

    // What if there was more than one "#text" id in the HTML?

  });

    // Note/remember that jQuery's .animate() can use "+=" and "-=" to
    // change a property by an amount, rather than just to a specified
    // number

    // What is the "event" parameter there for in our keypress handler?
    console.log(event);

    // Did you know you can check which key was pressed with event.which?
    // console.log(event.which);

    // But it comes back as a number... but we can convert it to find out
    // which character was pressed:
    // console.log(String.fromCharCode(event.which));

  });

});
