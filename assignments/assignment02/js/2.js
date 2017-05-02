
// We need an API key to be allowed to request news data
// You can request one via https://webhose.io
var newsAPIKey = "f769d62b-ebe0-4ea2-8350-7fda1e3b038b";

// This is the URL we will use to make a query to the news API
// We add the token parameter along with our key so that we're
// authorized to make quests
var newsAPIURL = "https://webhose.io/search?token=" + newsAPIKey;

// These are extra parameters we'll add to the URL to specify the
// news we want. In this case we want JSON TRUMP, only ONE headline
// in ENGLISH and a specific query of 'Trump'
var newsParameters = "&format=json&size=1&language=english&q=I&highlight=true";


var colors = ["#" + Math.floor(Math.random()*16777215).toString(16), "black"];







$(document).ready(function() {


  function gotNewsData (data) {
    console.log(data);

    // Pull out the title of the story (the headline)
    var title = data.posts[0].title;

    var textHighlight = data.posts[0].highlightText;


    var mainImage = data.posts[0].thread.main_image;

    // Add the headline as a single link on our page
    $('div').append( title + '</a>' + textHighlight + '<img src="'+ mainImage +'">');
    $('body').append( '<img src="'+ mainImage +'">');

      $("*").css({
        "height": "auto"
      });

      $("body").css({
        "height": "200%",
      })

      $("img").css({
        "border": "red 9px groove",
        "perspective": "50em"
      });


      $("div").css({
        "font-weight": "900em",
        "color": getRandomElement(colors),
        "height": "50%",
        "width": "50%",
        "top": "50%",
        "left": "50%",
        "fontSize": "40px",
        "position": "fixed",
        "overflow":"scroll",
        "boxSizing":"border-box"
      });



      // Use blast to target characters
      $('div').blast({
        delimiter: 'sentence'
      });

      // Go through each element with the 'blast' class and assign
      // a random set of CSS to it




      $('.blast').mouseover(function () {
        var randomVoice = ['UK English Male','UK English Female','US English Female','Spanish Female','French Female', 'Deutsch Female', 'Italian Female', 'Greek Female', 'Hungarian Female','Russian Female', 'Japanese Female', 'Hindi Female', 'Serbian Male', 'Australian Female','Afrikaans Male', 'Hatian Creole Female','Portuguese Female'];

        var voice = getRandomElement(randomVoice);
        var voiceParameters = {
          pitch: Math.floor(Math.random() * 5),
          rate: Math.floor(Math.random() * 10)/10,
          volume: 1



        }


          // When a word is moused over, just use responsive voice to speak
          // its text (e.g. the word itself)
          responsiveVoice.speak($(this).text(),voice,voiceParameters);
          // Note that we're not bothering to check if the voice stuff is loaded
          // so it's probably possible to create a nice red error in the console
          // if you mouseover "too soon", but it won't actually break the page.
          // If you're doing this for a project I'd expect you to have the checking
          // stuff so that doesn't happen.
        });



    // Consider:
    // How would you limit the user to a single headline per day?
  }


  $.getJSON(newsAPIURL + newsParameters, gotNewsData);




});







// getRandomElement (array)
//
// Helper function get pull a random element from an array
function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
}
