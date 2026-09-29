const person = {
  fname: "Juan",
  lname: "Rosario",
  age: 22,
  address: {
    city: "La Romana",
    street: "C/ Primera, Bajo Mundo",
  },
  hobbies: ["Programar", "Leer", "Jugar basketball"],
};

// console.log(person.hobbies);

// console.log(person.fname, person.lname);

const {
  fname,
  lname,
  address: { city, street },
} = person;

console.log(fname, lname, city, street);

const product = {
  name: "Laptop",
  mark: "Lenovo",
  prices: {
    cash: 33898.87,
    card: 42874.98,
  },
};
