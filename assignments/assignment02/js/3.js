$('head').append('<script src="js/flocking-all.js" content="text/javascript"></script>');



// Wrap everything in a function to keep your stuff private.
(function () {

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("myStuff");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    myStuff.play = function () {




      var synth = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: {
            ugen: "flock.ugen.mouse.cursor",
            rate: "control",
            mul: 880,
            add: 110,
            options: {
                axis: "width",
                interpolation: "exponential",
            }
        },
        mul: {
            ugen: "flock.ugen.mouse.cursor",
            rate: "control",
            options: {
                axis: "height",
            },
            mul: 0.5
        }
    }
});




        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        environment.start();
    };

}());



$(document).ready(function() {

  var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $("body");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = Math.round(e.pageY / h);
    body.css("background-color", "rgb("+pageX+","+pageY+","+pageX+")");
});


  myStuff.play();
  });
