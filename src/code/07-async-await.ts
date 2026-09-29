import type { User } from "./user.interface";

const URL = "https://jsonplaceholder.typicode.com/users";

const request = await fetch(URL);
const response: User[] = await request.json();

console.log(response);
