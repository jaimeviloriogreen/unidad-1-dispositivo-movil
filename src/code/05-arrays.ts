// const person = {
//   fname: "Juan",
//   lname: "Rosario",
//   age: 22,
// };

//? Simulación de BD
const users = [
  { fname: "Juan", lname: "Santana", age: 18 },
  { fname: "María", lname: "Peña", age: 16 },
  { fname: "Rosario", lname: "Quezada", age: 22 },
];

// users.forEach((user) => {
//   if (user.age > 17) {
//     console.log(user.fname);
//   }
// });

// const olderUsers = users.filter((user) => user.age > 37);

// const usersFullName = users.map((user) => ({ fullName: `${user.fname} ${user.lname}` }));

const usersFullName = users.map((user) => {
  return { fullName: `${user.fname} ${user.lname}` };
});

console.log(usersFullName);
