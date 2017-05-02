//Unfortunately I could not get this one to work

$(document).ready(function() {

  var video = document.querySelector("#myVideo");

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }

    function handleVideo(stream) {
        video.src = window.URL.createObjectURL(stream);
    }

    function videoError(e) {
        // do something
    }


    // The other 50% of the time we'll mess up the page
    messUpPage();


  }
);


function messUpPage() {

  // We'll use a for loop to count up to the total number of images
  // we want to add to the page and run the code for adding them
  for (var i = 0; i < 2000; i++) {
    var video = createRandomVideo();
    $('body').append("#myVideo");
  }
}


function createRandomVideo() {



  // Now we generate a random x and y location for the image to display
  var imageX = randomIntegerInRange(0,3000);
  var imageY = randomIntegerInRange(0,3000);
  var imageHeight = randomIntegerInRange (0,500);
  var imageWidth = randomIntegerInRange (0,500);


  // Now we generate the actual image element with jQuery, building in
  // the location of the image for the src property

  var video = window.URL.createObjectURL(stream);
  // Note that we're relying on giving it class "image" for things like
  // position: absolute

  // Then use CSS to set its location with top and left
  video.css({
    position: "absolute",
    top: imageY + 'px',
    left: imageX + 'px',
    height: imageHeight + 'px',
    width: imageWidth + 'px'
  });


  function randomIntegerInRange(min,max) {

    // This is just an equation essentially.
    //
    // Math.random() returns a number between 0 and 1
    // Math.floor() removes anything after the decimal point
    // (max - min) gives us the size of the possible range of values
    //
    // So a random amount of that range + min will give us a
    // random number between min and max (not including max)

    return Math.floor(Math.random() * (max - min)) + min;

  }
