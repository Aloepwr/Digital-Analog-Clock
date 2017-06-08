//  Variant with the animation of the second hand.

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let hourPosition = ( hour * (360/12) + ( minute * (360/60)/12) );
let minutePosition = ( minute * (360/60) + (second * (360/60)/60) );
let secondPosition = second * (360/60);

function runClock() {
  hourPosition += (3/360);
  minutePosition += (6/60);
  secondPosition += 6;

  HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
};

var interval = setInterval(runClock, 1000);


//  Variant without the animation of the second hand.

//  If switching tabs in browser and going back to the Digital Analog Clock tab,
//  the "seconds hand" will run through the clock to keep up with the time.

//  Simply go to "style.css"
//  and comment out the "transition" for #hour, #minute, #second style
//  at the bottom of the stylesheet.


//  Obviously, comment out the above Javascript code for the Clock.
//  Uncomment below code after switching off the "transition".

/* -----------------------------------------------------------------------------
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock() {
  var date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hourPosition = ( hour * (360/12) + ( minute * (360/60)/12) );
  let minutePosition = ( minute * (360/60) + (second * (360/60)/60) );
  let secondPosition = second * (360/60);

  HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
};

var interval = setInterval(runClock, 1000);

----------------------------------------------------------------------------- */
