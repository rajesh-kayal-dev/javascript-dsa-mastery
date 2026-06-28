/*
====================================
CALL STACK
====================================

Definition:
Call Stack is a data structure used by
JavaScript to keep track of function
execution.

Rule:

LIFO
(Last In First Out)

Push -> Function Called
Pop  -> Function Finished

====================================
Example
====================================
*/

function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hi");
}

one();

/*
Stack Flow

Step 1

one()

----------------
one()
----------------

Step 2

two()

----------------
two()
one()
----------------

Step 3

three()

----------------
three()
two()
one()
----------------

Step 4

console.log("Hi")

Output:
Hi

Step 5

Remove three()

----------------
two()
one()
----------------

Step 6

Remove two()

----------------
one()
----------------

Step 7

Remove one()

----------------
Empty
----------------

====================================
Interview Point
====================================

Call Stack tracks which function
is currently executing.

Function call  -> Push
Function finish -> Pop
*/