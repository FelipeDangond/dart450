//this is the maine script that randomizes which script is triggered and than
//creates a cookie associated to the user (so he cannot experience the other scripts)

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var scripts = [
  "js/1.js","js/2.js","js/3.js","js/4.js"
];

function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
};


// getting a random script



$(document).ready(function() {


// this part controls wether or not the user can access the website depending on the time (only accessible from 5 to 6 am)
  var time = new Date().getHours();
  if (time < 5 || time > 6) {
    //it redirects the user if he isn't in the time range specified
      window.location.replace("https://www.google.ca/?gfe_rd=cr&ei=o2kHWdHFIMih8wfQ-pvACQ");
  }


  //setting the random script selected as the working script in the page

  var saved_path = getCookie('js_path');

  if (saved_path)
  {
      $.getScript (saved_path);
  }
  else
  {
    var url = getRandomElement(scripts);
    $.getScript (url);
    setCookie('js_path', url, 10);
  }

  console.log(url, time);
  console.log(saved_path);




});
