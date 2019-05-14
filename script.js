class City {
  constructor(num, name, Ss, Sr) {
    this.num = num;
    this.name = name;
    this.Ss = Ss;
    this.Sr = Sr;
  }
}

let Cornwall = new City(1, 'Cornwall', 2.1, 0.4);
let Kingston = new City(2, 'Kingston', 2.1, 0.4);
let Ottawa = new City(3, 'Ottawa', 2.1, 0.4);


let city = document.getElementById('city').value;


console.log(city);