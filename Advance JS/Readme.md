Js is synchronous in nature
which means it execute one line of code at a time
but if a line of code take longer period of time, the below code should wait until the code execution is completed

In order to avoid this behaviour we will be convert js in to asynchronous code


In order to convert to asynchronous way, js alone isn't enough
we have WEB browser API's which will help it to convert into asynchronous

WEB API's makes js asynchronous programming possible
WEB browser will give use certain methods which will allow us to use WEB browser API.

1. setTimeout
2. setInterval
3. Local Storage
4. fetch

-----------------------------------------
1. Stack order. --> Last in- first out
2. Queue order. --> first in - first out
3. web api

Event loop
 stack ---> web api (browser) ---> queue ---> stack





 // Data types
    1. Primitive datatype (pass by value) --> it stores exact value
    ** these are immutable(means we cann't update the value of the internal elements)
        a. number
        b. boolean
        c. string
        d. null
        e. undefined
    2. Non-Primitive datatype (pass by reference) --> it stores address
    ** these are mutable(means we can update the value of the inside element)
        a. array
        b. function
        c. object
