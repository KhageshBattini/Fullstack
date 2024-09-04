## Asynchronous programming


js will read each line and execute it
it will only handle one line at time--> synchronous

## execution context
    JS will executes with the help of execution context. In this we have 2 steps

    1. creation phase or memory phase
    2. execution phase

let a=10;
console.log(a);


1. creation phase
        - all the variable, function declaration will be stored here

        let a; var b; const name;

        - by default the js ---> undefined.

2. execution phase 
        - assigning the values to the variables in the place of undefined
        - a=10;
        console.log(a); ---> print.


## Hoisting
    - It is a default behaviour where function declaration and variable will move to the top of the scope before code execution.
        - Global scope
        - Block scope

    - The elements which are declared with "var" only access in the global scope after storing. 
    - But the elements which are stored with "let" and "const" also stored in global scope but those are not accessable. this type is called "Temporal Dead Zone(TDZ)"


-------------------------------------------------------------

## Example

let a=10;

function print(){

    let b=20;
    console.log(a);
}

print();

## Execution context for the example
    1. creation phase
        - let a: undefined
        - print: function print(){
            let b=20;
            console.log(a);
        }
        
    2. execution phase
        - let a=10;
        - we are calling a function
            - execution context
                - creation phase
                    - let b: undefined
                - execution phase
                    - let b=20;
                    - console.log(a);


## WEB API
    - To make async programming possible js online isn't enough
    - we also need WEB browser API

    These WEB APIs make async programming possible
    Some of the web browser methods that are used as WEB APIs
    - LocalStorage
    - setTimeout
    - setInterval
    - fetch
     