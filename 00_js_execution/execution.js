// when javascript engine scan the scriptfiles it makes an environment called the execution context

//there are two type of execution context 1.Global and 2.Function

// 1.Global context - this context created when js script starts to run, it represent global scope of javascript
// this global context is refered in this keyword (for browser global context is window object)

// 2.Function context - this context created whenever function is called & it represents local scope of functions


// Phases of execution context

// 1.creation(memory) phase - create the execution context and setup scripts environment. determines the values of
// variables and functions and setup scope chain for execution context

// 2. execution phase - execute the code in the execution context
// for each function call new exection context is created and after function return the value exection context is destroyed


//call stack

// to keep track of all exection context including global and function javascipt engine uses call stack
// it is based on LIFO principle

// The call stack has its own fixed size depending on the system or browser. If the number of contexts 
// exceeds the limit, then a stack overflow error will occur. This happens with a recursive function that has no base condition.

// link - https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/