/*
====================================
EVENT LOOP
====================================

Definition:
Event Loop continuously checks whether
the Call Stack is empty. If it is empty,
it moves callbacks from the Queue to
the Call Stack.

Flow:

Call Stack
    ↓
Web APIs
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack

====================================
Example 1
====================================
*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

/*
Output:

A
C
B

Why?

1. A executes
2. setTimeout goes to Web APIs
3. C executes
4. Call Stack becomes empty
5. Event Loop moves callback to stack
6. B executes
*/

/*
====================================
Interview Point
====================================

setTimeout(fn, 0)

DOES NOT mean:
Run immediately

It means:
Run after Call Stack becomes empty.
*/