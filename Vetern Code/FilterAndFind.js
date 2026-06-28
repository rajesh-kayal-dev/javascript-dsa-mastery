const employees = [
  { name: "Alice", salary: 5000, age: 25 },  // Index 0
  { name: "Bob", salary: 7500, age: 32 },    // Index 1
  { name: "Charlie", salary: 4000, age: 28 },// Index 2
  { name: "Diana", salary: 9200, age: 35 },  // Index 3
  { name: "Ethan", salary: 6100, age: 24 },  // Index 4
  { name: "Fiona", salary: 5500, age: 30 },  // Index 5
  { name: "George", salary: 3200, age: 40 }, // Index 6
  { name: "Hannah", salary: 8800, age: 27 }  // Index 7
];


const filter = employees.filter((item)=>{
	return item.age>30;
})

const find = employees.find((item)=>{
	return item.age>30;
})

console.log(filter);
console.log(find);