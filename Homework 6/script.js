//  1 What will be the outputs and explain why?
// arajiny global scope-na erkrordy arden myObject-nna
//vorovhetev menq nax kanchum enq iran myobjectic isk
//iranum menq vonvork copy enq arel marminy functioni

// 2 What will be the outputs and explain why?
// kti objectti this-y  callLogThis-y mrjy 3 angam

// 3 What will be the outputs and explain why?
// arajiny objectna erkrordy window-y

// 4 What will be the outputs and explain why?
// 17

// 5 What will be the outputs and explain why?
// ktpi 10 undefined  undefined 777 vorovhetev mitex kanchum enq foo-n isk myus tex object-i foon

// 6 What will be the outputs and explain why?
// ktpi 22,22,undefined

// 7 What will be the outputs and explain why?
// 3-n3l ktpi {name: 'Specific Object'}

// 8 What will be the outputs and explain why?
// ktpi   obj-i this-y vorovhetev kanchum enq obj-ekti vrayic

// 9 What will be the outputs and explain why?
// ktpi 3 , 5 , 4 undefined vorovhetev new-ov grelu jamanak this.x = 5 functioni mej petqa grvi

// 10  Using the Rest Operator
// Create a function called sum that takes any number of arguments and returns their sum. Use the
// rest operator to handle the arguments.

function sum(...args) {
  return args.reduce((acc, number) => acc + number, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Destructuring Objects
// Create an object called person with properties name, age, and city. Write a function called
// introduce that takes the person object as an argument and uses destructuring to extract the
// properties. The function should return a string introducing the person.

function introduce({ name, age, city }) {
  return `Hi, I'm ${name}, I'm ${age} years old
and I live in ${city}.`;
}

const person = { name: "Alice", age: 25, city: "New York" };
console.log(introduce(person)); // Output: "Hi, I'm Alice, I'm 25 years old
// and I live in New York."

// 12 Destructuring Arrays
// Write a function called getFirstTwo that takes an array of numbers and uses array destructuring
// to return the first two elements as an array.

function getFirstTwo([first, second]) {
  return [first, second];
}

const numbers = [10, 20, 30, 40, 50];
const result = getFirstTwo(numbers);
console.log(result);

// 13 Using the Spread Operator with Arrays
// Create a function called combineArrays that takes two arrays and combines them into a new
// array using the spread operator. The function should return the combined array.

function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(combineArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]

// 14 Create a function called processStudents that accepts a variable number of student objects. Each
// student object should have properties like name, age, and grades. Use the rest operator to
// collect all the student objects. Destructure each student to log their name and average grade
// (assuming grades is an array). Use the spread operator to create a new array that combines all
// students' names

function processStudents(...students) {
  const studentNames = [];

  students.forEach((student) => {
    const { name, grades } = student;
    const averageGrade =
      grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

    console.log(`Name: ${name}, Average Grade: ${averageGrade}`);
    studentNames.push(name);
  });

  return [...studentNames];
}
const student1 = { name: "Alice", age: 20, grades: [85, 90, 78] };
const student2 = { name: "Bob", age: 22, grades: [80, 85, 88] };
const student3 = { name: "Charlie", age: 21, grades: [92, 87, 85] };
console.log(processStudents(student1, student2, student3));

// 15 Merge Multiple Objects
// Create a function that merges multiple objects into one, giving priority to properties from later
// objects in the argument list. Please note we don’t know how many objects there are in advance

function mergeObjects(...objects) {
  return objects.reduce((acc, object) => ({ ...acc, ...object }), {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };
const mergedObj = mergeObjects(obj1, obj2, obj3);
console.log(mergedObj);
