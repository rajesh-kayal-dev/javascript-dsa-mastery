/**
 *1. TypeScript is superset f js add static types, and some advance feature to help aplliuication sclable and error free
 */

/**
 * What are Types in TypeScript?
 * Types Defined The kind of data a veriable can hold
 */

let age: number = 25;
let full_name: string = "Rajesh";
let isActive: boolean = true;


/**
 * Diffrence Between Typescript and JavaScript
 * 
 * JavaScript is Dynamic type langauge we don't define type and error is found at runtime no interface support less sclable (While program execute)
 * 
 * TypeScript is Static type langauge we define type and error is found at compile time support interfaces and more sclable (While writing code or before run)
 * 
 */

//JavaScript Example
let age = 25;
age = "Twenty Five";

// TypeScript Example
let age1: number = 25;
age1 = "Twenty Five"; // Error: Type 'string' is not assignable to type 'number'


/**
 * What is any Type?
 * any disable type checking, we should avoid unless necessary.
 * 
 * Example:
 */

let data: any = 25;
data = "Twenty Five";
console.log(data)

/**
 * What is unknown Type?
 * unknown is similar to any but it is safer because it does not allow any operation without type checking
 * You must check type before Using it.
 * Example:
 */
let data1: unknown = 25;
data1 = "Twenty Five"; // No error, but loses type safety
console.log(data1)



/**
 * What is Interface?
 * An Interface define the stature of an Object
 */

interface User {
  name: string,
  age: number
}

const user: User = {
  name: "Raj",
  age: 25
}

/**
 * Interface Vs Type ?
 * Interfce - Extendable and prefer for object
 * Type- Support Union |Intersection
 */

/**
 * What is Union?
 * Allows multiple types for a variable 
 */
type ID = number | string;

/**
 * What is Intersection?
 * Support combine multiple Type
 */
type Name = string | string[];


type User = ID & Name;

/**
 * What are Enums?
 * Enums defined name set of constants values
 * Example:
 */

enum Status {
  Pending,
  InProgress,
  Completed
}

/**
 * What is Generics?
 * Generics are templates that can be used with types
 * Its make the component resuble and type-safe
 */

function indentity<T>(vale: T): T {
  return vale;
}

function A(value: number): number {
  return value;
}

console.log(A(20))

/**
 * What is never type?
 * It means a function never return anything and never exit normally or a situation is impossible
 * Example:
 */

function ErrorLoggeer(message: string): never {
  throw new Error(message);
}
ErrorLoggeer("Something went wrong");


/**
 * What is read-only?
 * ReadOnly make the property of an object immutable i.e we can't change the value after initialization
 * Example:
 */

interface User {
  readonly id: number;
}

const user: User = {
  id: 123
}

/**
 * TypeScript in react `why use it?
 * Better Autocomple
 * Catch eror early
 * safe props and state
 * sclable and error free application
 * 
 * 
 */