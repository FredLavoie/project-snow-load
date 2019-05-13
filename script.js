class City {
  constructor(name, Ss, Sr) {
    this.name = name;
    this.Ss = Ss;
    this.Sr = Sr;
  }
}

let Cornwall = new City('Cornwall', 2.1, 0.4);
let Kingston = new City('Kingston', 2.1, 0.4);
let Ottawa = new City('Ottawa', 2.1, 0.4);

function values() {
  return{
  document.getElementById('Ss').innerHTML = Cornwall.Ss;
  document.getElementById('Ss').innerHTML = Cornwall.Sr;
  }
}