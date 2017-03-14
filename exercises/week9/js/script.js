/*
Inspired by:
News
Pippin Barr

Code to display a single news headline about Donald Trump so that
you can try to control yourself...

Uses:
https://webhose.io

-----------------------
Felipe Dangond
Excercise 09 - DADA/data

*/

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
var newsParameters = "&format=json&size=1&language=russian&q=1&highlight=true";

$(document).ready(function() {
  // We use getJSON to get the JSON from the URL with the parameters
  // and call gotNewsData when the data comes in...
  $.getJSON(newsAPIURL + newsParameters, gotNewsData);
});

// gotNewsData (data)
//
// Called by getJSON when the data arrives. The data argument will
// contain the data about our news.
function gotNewsData (data) {
  console.log(data);

  // Pull out the title of the story (the headline)
  var title = data.posts[0].title;

  var textHighlight = data.posts[0].highlightText;


  // Pull out the URL for the story
  var link = data.posts[0].url;

  var mainImage = data.posts[0].thread.main_image;

  // Add the headline as a single link on our page
  $('body').append('<a href="'+ link + '">' + title + '</a>' + textHighlight + '<img src="'+ mainImage +'">');


  // Consider:
  // How would you limit the user to a single headline per day?
}
