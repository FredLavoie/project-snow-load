/* eslint-env browser */
// list of cities with their data
const cities = [
  {name: 'Cornwall', Ss: 2.1, Sr: 0.4},
  {name: 'Kingston', Ss: 2.1, Sr: 0.4},
  {name: 'Ottawa', Ss: 2.1, Sr: 0.4},
];

// list of load factors
let cb = 0.8;
let cw = 1;
let cs = 1;
let ca = 1;

// get 'Ss' and 'Sr' values in city based on selection
const city = document.querySelector('#city');
let snowData = [];
console.log(snowData);
city.onchange = function() {
  for(let i = 0; i < cities.length; i++) {
    if(cities[i].name == city.value) {
      document.querySelector('#ss').innerHTML = cities[i].Ss + ' kPa';
      document.querySelector('#sr').innerHTML = cities[i].Sr + ' kPa';
      snowData.push(cities[i].Ss);
      snowData.push(cities[i].Sr);
      console.log(snowData);
    }
  }
};

// display importance factor based on selected category
const imp = document.querySelector('#importance');
let impFactor = [];
imp.onchange = function() {
  impFactor.push(Number(imp.value));
  document.querySelector('#imp').innerHTML = 'Importance factor, Ie = ' + (imp.value);
  console.log(impFactor);
};


// calculate and display the basic snow load
const finalAnswer = document.querySelector('#answer');
finalAnswer.onclick = function() {
  let ss = snowData[0];
  let sr = snowData[1];
  let ie = impFactor[0];
  let snow = ie * (ss * (cb * cw * cs * ca) + sr);
  document.querySelector('#snow').innerHTML = snow + ' kPa';
};

