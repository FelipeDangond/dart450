

const TOTAL_IMAGES = randomIntegerInRange(0,600);




$(document).ready(function() {




    // The other 50% of the time we'll mess up the page
    messUpPage();
    randomBackgroundColor();

  }
);


// messUpPage()
//
// Applies a bunch of random numbers and images to the page to make
// it a big mess

function messUpPage() {

  // We'll use a for loop to count up to the total number of images
  // we want to add to the page and run the code for adding them
  for (var i = 0; i < TOTAL_IMAGES; i++) {
    var img = createRandomImage();
    $('body').append(img);
  }
}



function randomBackgroundColor () {

  $('*').click(function() {

    $("body").css ({
      'background-color': "#" + Math.floor(Math.random()*16777215).toString(16)
    })
})
}



function createRandomImage() {

  // First we choose a random number for the image to use
  // (This only works because we numbered the image filenames)


  // Now we create the string that points to the location of the image
  var imageSource = "http://www.freepngimg.com/download/cloud/9-cloud-png-image.png";

  // Now we generate a random x and y location for the image to display
  var imageX = randomIntegerInRange(0,3000);
  var imageY = randomIntegerInRange(0,3000);
  var imageHeight = randomIntegerInRange (0,500);
  var imageWidth = randomIntegerInRange (0,500);


  // Now we generate the actual image element with jQuery, building in
  // the location of the image for the src property
  var img = $('<img class="image" src="' + imageSource + '">');
  // Note that we're relying on giving it class "image" for things like
  // position: absolute

  // Then use CSS to set its location with top and left
  img.css({
    position: "absolute",
    top: imageY + 'px',
    left: imageX + 'px',
    height: imageHeight + 'px',
    width: imageWidth + 'px'
  });

  $( ".image" ).click(function() {
  $( ".image" ).animate({
    width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],
  }, 2000, "linear", function() {
    $( this ).after( "<div></div>" );
  });
});


  // Randomly rotate the image using our function
  randomSaturate(img,100,500);

  // Return the image we created
  return img;
}

// randomRotate(element,maximum)
//
// This function takes a jQuery element and changes its CSS to rotate
// it by a random positive number up to the specified maximum, in degrees.

function randomSaturate(img,min,max) {

  // First generate a random integer between 0 and the maximum
  saturation = randomIntegerInRange(min,max);

  // Now set the supplied element's transform property to rotate it
  // around the Z axis by the random amount
  img.css({
    "filter": "saturate(" + saturation + "%)"
  });


}


// randomIntegerInRange(min, max)
//
// Returns a random integer between min and max (not including max)

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
