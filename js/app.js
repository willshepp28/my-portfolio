


// changes connection type
function connection() {

// grabs h1 element
  var connecth1 = document.getElementById('insert-connect');

  setTimeout(function() {
    connecth1.innerHTML = '2G';
  }, 2000);

  setTimeout(function() {
    connecth1.innerHTML = '3G';
  }, 4000);

  setTimeout(function() {
    connecth1.innerHTML = '4G';
  }, 6000);

  setTimeout(function() {
    connecth1.innerHTML = 'LTE';
  }, 8000);
};





// this function adds and removes bars from the battery
function batteryCharge() {

  // grabs variables
  var battery1 = document.getElementById('bat-bars1');
  var battery2 = document.getElementById('bat-bars2');
  var battery3 = document.getElementById('bat-bars3');
  var battery4 = document.getElementById('bat-bars4');
  var battery5 = document.getElementById('bat-bars5');






// checks to see if the last battery background color is transparent
if (battery5.style.background === 'red') {

subtractWatts();

} else {
  addWatts();

}



// adds battery life
function addWatts() {

  // adds bar to #bat-bars1
setTimeout(function() {
  battery1.style.background = 'red';
},2000);

  // adds bar to #bat-bars2
setTimeout(function() {
  battery2.style.background = 'red';
},4000);

    // adds bar to #bat-bars3
  setTimeout(function() {
    battery3.style.background = 'red';
  },6000);

    // adds bar to #bat-bars4
  setTimeout(function() {
    battery4.style.background = 'red';
  },8000);

  // adds bar to #bat-bars5
  setTimeout(function() {
  battery5.style.background = 'red';
},10000);

}


// subtract battery watts
function subtractWatts() {


      setTimeout(function() {
        battery5.style.background = 'transparent';
      },11000)

      setTimeout(function() {
        battery4.style.background = 'transparent';
      },12000)

      setTimeout(function() {
        battery3.style.background = 'transparent';
      },13000)

      setTimeout(function() {
        battery2.style.background = 'transparent';
      },14000)

      setTimeout(function() {
        battery1.style.background = 'transparent';
      },15000)
}

}










// adds/removes reciption battery-bars
function reception() {

}

// adds/removes connection strength
function connectionStrength() {

}










// window.onload = function() {
  // calls functions here when the window has fully loaded


    batteryCharge();
    reception();


connection();
// };
