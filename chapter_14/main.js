//store data in local storage
localStorage.setItem('name', 'marouane');
localStorage.setItem('age', 28);

//get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

//updating data
// localStorage.setItem('name', 'luigi');
// localStorage.age = '40'

// name = localStorage.getItem('name');
// age = localStorage.getItem('age')
// console.log(name, age);

//deleting data from local storage
// localStorage.removeItem('name');

// localStorage.clear();
// name = localStorage.getItem('name');
// age = localStorage.getItem('age');
// console.log(name, age);
/////////////////////////////////////////////////////
//stringify parsing data
const todos = [
  {text: 'item1', author: 'author1'},
  {text: 'item2', author: 'author2'},
  {text: 'item3', author: 'author3'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const store = localStorage.getItem('todos');

console.log(JSON.parse(store));