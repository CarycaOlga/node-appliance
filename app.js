const fs = require('fs');

const genders = ["male", "female"];

const maleNames = ["Marek", "Marcin", "Aleks", "Damian", "Jakub"];

const femaleNames = ["Krystyna", "Lidia", "Bożena", "Dorota", "Martyna"];

const lastNames = ["Nowak", "Dziupla", "Majchrzak", "Saletra", "Chrobak"];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i=0; i<20; i++) {
  
  let person ={};

  person.gender = randChoice(genders);

  if(person.gender === "male") {
    person.firstName = randChoice(maleNames)
  } else {
    person.firstName = randChoice(femaleNames)
  }

  person.lastName = randChoice(lastNames);

  person.age = Math.round(Math.random() * 20 + 30);

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});